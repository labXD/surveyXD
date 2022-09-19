import { useRouter } from "next/router"
import { useMemo } from "react"

import { trpc } from "@/trpc/web"

export const useActiveSurvey = (surveyId?: string) => {
  const { isLoading, data, error } = trpc.useQuery(
    ["survey.getSurvey", { surveyId: surveyId ?? "" }],
    {
      enabled: !!surveyId,
    }
  )

  if (!surveyId) {
    return {}
  }

  return { data, loading: isLoading, error }
}

export const useActiveSurveyFromRoute = () => {
  const router = useRouter()
  const { surveyId: surveyIdRaw } = router.query

  const surveyId = useMemo(() => {
    if (typeof surveyIdRaw !== "string") {
      return
    }

    return surveyIdRaw
  }, [surveyIdRaw])

  return useActiveSurvey(surveyId)
}
