import { useRouter } from "next/router"
import { useEffect, useMemo } from "react"

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

export const useCreateSurvey = (redirect = true) => {
  const { mutate, data, isLoading, error } = trpc.useMutation(
    "survey.createSurvey"
  )
  const router = useRouter()

  useEffect(() => {
    if (!redirect || !data?.id) {
      return
    }

    router.push(`/survey/${data.id}`)
  }, [data])

  const createSurvey = (title?: string) => {
    mutate({ title })
  }

  return { createSurvey, data, loading: isLoading, error }
}
