import { type NextPage } from "next"
import { useRouter } from "next/router"

import { Response } from "../containers"

export const ResponsePage: NextPage = () => {
  const router = useRouter()

  const { surveyId } = router.query

  if (!surveyId || typeof surveyId !== "string") {
    return null
  }

  return <Response surveyId={surveyId} />
}
