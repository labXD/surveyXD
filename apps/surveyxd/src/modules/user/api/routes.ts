import { TRPCError } from "@trpc/server"
import { z } from "zod"

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
