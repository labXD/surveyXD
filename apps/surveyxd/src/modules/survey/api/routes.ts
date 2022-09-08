import { SurveyPublishStatus } from "@prisma/client"
import { z } from "zod"

import { createRouter } from "@/trpc/api"

export const surveyRoutes = createRouter()
  .mutation("createSurvey", {
    input: z.object({
      title: z.string().optional(),
    }),
    resolve: async ({ ctx, input }) => {
      return ctx.prisma.survey.create({
        data: {
          title: input.title,
        },
      })
    },
  })
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
  .query("getSurvey", {
    input: z.object({
      surveyId: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      return ctx.prisma.survey.findUnique({
        where: { id: input.surveyId },
      })
    },
  })