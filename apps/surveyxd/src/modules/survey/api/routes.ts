import { z } from "zod"

import { SurveyPublishStatus, QuestionType } from "@/prisma"
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

      return await ctx.prisma.survey.create({
        data: {
          title: input.title,
          publishStatus: SurveyPublishStatus.PUBLISHED,
          questions: {
            create: input.questions.map((q) => ({
              title: q.title,
              questionType: q.type,
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
          questions: {
            select: {
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
