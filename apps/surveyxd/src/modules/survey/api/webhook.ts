import { getCookie } from "cookies-next"
import { type NextApiRequest, type NextApiResponse } from "next"
import { unstable_getServerSession as getServerSession } from "next-auth/next"
import { z } from "zod"

import { nextAuthOptions } from "@/auth/api"
import { prisma } from "@/meta/api"
import { SurveyUserAcessRoles } from "@/prisma"

export const attachUserToSurveyHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "GET") {
    return res.status(400).send("Invalid request")
  }

  const session = await getServerSession(req, res, nextAuthOptions)

  const anonUserId = getCookie("anon-user-id", { req, res })

  if (!session?.user || !anonUserId) {
    return res.status(401).send("Unauthorized request")
  }

  const querySchema = z.object({
    surveyId: z.string(),
  })
  const query = req.query

  const result = await querySchema.safeParseAsync(query)

  if (!result.success) {
    return res.status(500).redirect("/500")
  }

  const survey = await prisma.survey.findUnique({
    where: {
      id: result.data.surveyId,
    },
    select: {
      anonUserId: true,
    },
  })

  if (anonUserId && survey && survey.anonUserId !== anonUserId) {
    res.status(500).redirect("/500")
  }

  await prisma.surveyAccess.create({
    data: {
      surveyId: result.data.surveyId,
      userId: session.user.id,
      role: SurveyUserAcessRoles.ADMIN,
    },
  })

  await prisma.survey.update({
    where: {
      id: result.data.surveyId,
    },
    data: {
      anonUserId: null,
    },
  })

  res.redirect(`/dashboard`)
}
