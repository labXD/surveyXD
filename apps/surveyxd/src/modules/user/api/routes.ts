import { TRPCError } from "@trpc/server"

import { SurveyUserAcessRoles } from "@/prisma"
import { createRouter } from "@/trpc/api/utils"

export const userRoutes = createRouter().query("getSurveys", {
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
