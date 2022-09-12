import DefaultErrorPage from "next/error"
import { useSession } from "next-auth/react"

import { NewSurveyPageNested } from "@/survey/web"

export default function NewSurvey() {
  const { data: session } = useSession()
  if (!session?.user) return <DefaultErrorPage statusCode={404} />

  return <NewSurveyPageNested />
}
