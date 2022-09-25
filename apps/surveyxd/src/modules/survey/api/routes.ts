import { getCookie } from "cookies-next"
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
  .mutation("submitResponse", {
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
      const data = input.responses
        .map((res) =>
          res.responseIds.map((id) => ({
            questionId: res.questionId,
            answerId: id,
            surveyId: input.surveyId,
          }))
        )
        .flatMap((v) => v)
      const res = await ctx.prisma.answer.createMany({
        data,
      })

      return res.count === data.length
    },
  })
