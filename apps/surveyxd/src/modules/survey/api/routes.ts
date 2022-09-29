import { TRPCError } from "@trpc/server"
import { getCookie } from "cookies-next"
import groupby from "lodash.groupby"
import groupBy from "lodash.groupby"
import { z } from "zod"

import {
  QuestionType,
  SurveyPublishStatus,
  SurveyUserAcessRoles,
} from "@/prisma"
import { createRouter } from "@/trpc/api"

export const surveyRoutes = createRouter()
  .mutation("updateSurvey", {
    input: z.object({
      surveyId: z.string(),
      title: z.string().optional(),
      published: z.nativeEnum(SurveyPublishStatus).optional(),
    }),
    resolve: async ({ ctx, input }) => {
      return ctx.prisma.survey.update({
        where: {
          id: input.surveyId,
        },
        data: {
          ...(input?.title ? { title: input.title } : {}),
          ...(input.published ? { publishStatus: input.published } : {}),
        },
      })
    },
  })
  .mutation("createSurvey", {
    input: z.object({
      title: z.string(),
      questions: z
        .object({
          required: z.boolean().optional(),
          title: z.string(),
          type: z.nativeEnum(QuestionType),
          options: z
            .object({
              value: z.string(),
            })
            .array(),
        })
        .array(),
    }),
    resolve: async ({ input, ctx }) => {
      console.log(`Survey created with title ${input.title}`)

      let anonUserId = getCookie("anon-user-id", {
        req: ctx.req,
        res: ctx.res,
      })

      anonUserId = typeof anonUserId === "boolean" ? null : anonUserId

      const survey = await ctx.prisma.survey.create({
        data: {
          title: input.title,
          publishStatus: SurveyPublishStatus.PUBLISHED,
          anonUserId,
          questions: {
            create: input.questions.map((q) => ({
              title: q.title,
              questionType: q.type,
              isRequired: q.required,
              options: {
                create: q.options.map((opt, i) => ({
                  numericValue: i,
                  textValue: opt.value,
                  questionType: q.type,
                })),
              },
            })),
          },
        },
        include: {
          questions: {
            include: {
              options: true,
            },
          },
        },
      })

      if (ctx.user) {
        await ctx.prisma.surveyAccess.create({
          data: {
            surveyId: survey.id,
            userId: ctx.user?.id,
            role: SurveyUserAcessRoles.ADMIN,
          },
        })
      }

      return survey
    },
  })
  .query("getSurvey", {
    input: z.object({
      surveyId: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      return ctx.prisma.survey.findUnique({
        where: { id: input.surveyId },
        select: {
          id: true,
          title: true,
          questions: {
            select: {
              questionType: true,
              isRequired: true,
              id: true,
              title: true,
              createdAt: true,
              options: true,
            },
          },
        },
      })
    },
  })
  .query("getSurveyResponses", {
    input: z.object({
      surveyId: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      // TODO: refactor into middleware
      if (!ctx.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" })
      }

      const hasAccess =
        (
          await ctx.prisma.surveyAccess.findMany({
            where: {
              surveyId: input.surveyId,
              userId: ctx.user?.id,
              OR: [
                { role: SurveyUserAcessRoles.EDITOR },
                { role: SurveyUserAcessRoles.ADMIN },
              ],
            },
          })
        ).length > 0

      if (!hasAccess) {
        throw new TRPCError({ code: "UNAUTHORIZED" })
      }

      const res = await ctx.prisma.surveyResponse.findMany({
        where: {
          surveyId: input.surveyId,
        },
        include: {
          answers: {
            include: {
              answer: true,
              question: true,
            },
          },
        },
      })

      const qs = await ctx.prisma.question.findMany({
        where: {
          surveyId: input.surveyId,
        },
      })

      const responses = res.map(({ answers: ans, ...response }) => {
        const answers = groupby(ans, "questionId")

        return {
          ...response,
          answers,
        }
      })

      return {
        questions: qs,
        responses,
      }
    },
  })
  .mutation("createResponse", {
    input: z.object({
      surveyId: z.string(),
      responses: z
        .object({
          questionId: z.string(),
          responseIds: z.string().array(),
        })
        .array(),
    }),
    resolve: async ({ ctx, input }) => {
      const res = await ctx.prisma.surveyResponse.create({
        data: {
          surveyId: input.surveyId,
          answers: {
            create: input.responses
              .map((res) =>
                res.responseIds.map((id) => ({
                  questionId: res.questionId,
                  answerId: id,
                }))
              )
              .flatMap((v) => v),
          },
        },
      })

      return res
    },
  })
  .query("getSurveyStats", {
    input: z.object({
      surveyId: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      const res = await ctx.prisma.survey.findUnique({
        where: {
          id: input.surveyId,
        },
        include: {
          questions: {
            include: {
              options: true,
              answers: {
                include: {
                  answer: true,
                },
              },
            },
          },
        },
      })

      const r = res?.questions.map((q) => {
        const r = groupBy(q.answers, "answerId")
        const ans = Object.keys(r)
          .map((key) => ({
            ansId: r[key][0].id,
            resCount: r[key].length,
            ...r[key][0].answer,
          }))
          .flatMap((v) => v)

        const totalAnsChosen = ans
          .map((a) => a.resCount)
          .reduce((ag, next) => ag + next, 0)

        return {
          questionId: q.id,
          questionText: q.title,
          ans: ans.map((a) => ({
            ...a,
            resCountPerct: a.resCount / totalAnsChosen,
          })),
        }
      })

      return r
    },
  })
