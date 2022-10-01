import { pipeline } from "node:stream/promises"

import { TRPCError } from "@trpc/server"
import { format } from "date-fns"
import { parseAsync } from "json2csv"
import groupBy from "lodash.groupby"
import { NextApiHandler } from "next"
import { unstable_getServerSession as getServerSession } from "next-auth/next"
import { z } from "zod"

import { nextAuthOptions } from "@/auth/api"
import { prisma } from "@/meta/api/prisma"
import { SurveyPublishStatus, SurveyUserAcessRoles } from "@/prisma"
import { createRouter } from "@/trpc/api/utils"

export const userRoutes = createRouter()
  .query("getSurveys", {
    resolve: async ({ ctx }) => {
      if (!ctx.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" })
      }

      const { id: userId } = ctx.user

      const surveys = (
        await ctx.prisma.surveyAccess.findMany({
          where: {
            userId,
            OR: [
              {
                role: SurveyUserAcessRoles.ADMIN,
              },
              {
                role: SurveyUserAcessRoles.EDITOR,
              },
            ],
          },
          include: {
            survey: {
              include: {
                responses: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        })
      )
        .map((surveyAccess) => surveyAccess.survey)
        .map((survey) => ({
          ...survey,
          responses: undefined,
          responseCount: survey.responses.length,
        }))

      return surveys
    },
  })
  .mutation("updateSurveyPublicationStatus", {
    input: z.object({
      surveyId: z.string(),
      status: z.nativeEnum(SurveyPublishStatus),
    }),
    resolve: async ({ ctx, input }) => {
      return ctx.prisma.survey.update({
        where: {
          id: input.surveyId,
        },
        data: {
          publishStatus: input.status,
        },
      })
    },
  })

export const downloadUseCsvHandler: NextApiHandler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(400).send("Invalid request")
  }

  const session = await getServerSession(req, res, nextAuthOptions)

  if (!session?.user) {
    return res.status(401).send("Unauthorized request")
  }

  const querySchema = z.object({
    surveyId: z.string(),
  })

  const query = req.query

  const result = await querySchema.safeParseAsync(query)

  if (!result.success) {
    return res.status(403)
  }

  const hasAccess =
    (
      await prisma.surveyAccess.findMany({
        where: {
          surveyId: result.data.surveyId,
          OR: [
            {
              role: SurveyUserAcessRoles.ADMIN,
            },
            {
              role: SurveyUserAcessRoles.EDITOR,
            },
          ],
        },
      })
    ).length > 0

  if (!hasAccess) {
    return res.status(404)
  }

  const responses = await prisma.surveyResponse.findMany({
    where: {
      surveyId: result.data.surveyId,
    },
    include: {
      survey: true,
      answers: {
        include: {
          question: true,
          answer: true,
        },
      },
    },
  })

  const survey = await prisma.survey.findUnique({
    where: {
      id: result.data.surveyId,
    },
  })

  if (!survey) {
    return res.status(404).send("Not Found")
  }

  const surveyQuestions = await prisma.question.findMany({
    where: {
      surveyId: result.data.surveyId,
    },
  })

  // startDate, completedData, responseId, Q0, Q1, ......
  // responses-SURVEY_NAME-yyyy/MM/dd-hh:mm

  const responsesForCsvGeneration = responses.map((response) => {
    const groupAnswersByQuestions = groupBy(response.answers, "questionId")

    const answers = surveyQuestions
      .map((q) =>
        groupAnswersByQuestions[q.id]
          ?.map((ans) => ans.answer.textValue)
          .join(",")
          .trim()
      )
      .map((e) => (!e ? "" : e))
      .map((ans, i) => ({ [`Q${i}`]: ans }))
      .reduce<Record<`Q${number}`, string>>((agg, next, i) => {
        if (Object.keys(next).length === 0) {
          return {
            ...agg,
            [`Q${i}`]: null,
          }
        }

        return {
          ...agg,
          ...next,
        }
      }, {})

    return {
      surveyId: response.surveyId,
      reponseId: response.id,
      submissionDate: format(response.createdAt, "yyyy/MM/dd-hh:mm"),
      ...answers,
    }
  })

  res.setHeader("Content-Type", "application/csv")
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=reponses-${survey.title
      ?.split(" ")
      .join("_")
      .toLowerCase()}-${format(new Date(), "yyyyMMdd")}T${format(
      new Date(),
      "hhmmss"
    )}.csv`
  )

  const csv = await parseAsync(responsesForCsvGeneration)

  return pipeline(csv, res)
}
