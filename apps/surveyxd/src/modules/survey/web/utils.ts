import { getCookie } from "cookies-next"
import { type GetServerSideProps } from "next"
import { unstable_getServerSession as getServerSession } from "next-auth/next"
import { z } from "zod"

import { nextAuthOptions } from "@/auth/api"
import { prisma } from "@/meta/api"
import { SurveyPublishStatus, SurveyUserAcessRoles } from "@/prisma"

export const getServerSidePropsSuccessPage: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const session = await getServerSession(req, res, nextAuthOptions)

  const anonUserId = getCookie("anon-user-id", { req, res })

  if (!session?.user && !anonUserId) {
    return {
      redirect: {
        destination: "/500",
        permanent: true,
      },
    }
  }

  const querySchema = z.object({
    surveyId: z.string(),
  })

  const result = await querySchema.safeParseAsync(query)

  if (!result.success) {
    return {
      redirect: {
        destination: "/500",
        permanent: true,
      },
    }
  }

  // path for logged in users
  if (session?.user) {
    const surveyAccess = await prisma.surveyAccess.findMany({
      where: {
        userId: session.user.id,
        surveyId: result.data.surveyId,
        OR: [
          { role: SurveyUserAcessRoles.ADMIN },
          { role: SurveyUserAcessRoles.EDITOR },
        ],
      },
    })

    const hasAccess = surveyAccess.length > 0

    if (!hasAccess) {
      return {
        notFound: true,
      }
    }
  }

  // path for anon users
  const survey = await prisma.survey.findUnique({
    where: {
      id: result.data.surveyId,
    },
    select: {
      anonUserId: true,
    },
  })

  if (anonUserId && survey && survey.anonUserId !== anonUserId) {
    return {
      notFound: true,
    }
  }

  return {
    props: {},
  }
}

// check if the survey is published
export const getServerSidePropsResponsePage: GetServerSideProps = async ({
  query,
}) => {
  const querySchema = z.object({
    surveyId: z.string(),
  })

  const result = await querySchema.safeParseAsync(query)

  if (!result.success) {
    return {
      redirect: {
        destination: "/500",
        permanent: true,
      },
    }
  }

  const survey = await prisma.survey.findUnique({
    where: {
      id: result.data.surveyId,
    },
  })

  if (!survey) {
    return {
      notFound: true,
    }
  }

  if (survey?.publishStatus !== SurveyPublishStatus.PUBLISHED) {
    return {
      redirect: {
        destination: `/survey/${survey?.id}/inactive`,
        permanent: true,
      },
    }
  }

  return {
    props: {},
  }
}
