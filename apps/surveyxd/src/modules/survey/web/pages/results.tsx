import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"

import { BaseLayout, PageMetaTitle, TopNav } from "@/meta/web"

import { SurveyTicker } from "../components"
import {
  QuestionLevelResults,
  ResponseTable,
  SurveyResultsAbstract,
} from "../containers"

const BREADCRUMBS = (
  <header className="flex items-center justify-between">
    <div className="flex justify-start items-center text-xs leading-none divide-x-2 text-xd-disabled-black-rgb select-none">
      <Link href="/user/dashboard" replace>
        <a className="text-sky-500 hover:text-sky-600 transition-all space-x-2 flex items-center pr-4">
          <span className="text-base material-symbols-rounded">
            keyboard_backspace
          </span>
          <span>Dashboard</span>
        </a>
      </Link>
      <span className="px-4">Survey Results</span>
    </div>
  </header>
)

export const ResultsPage: NextPage = () => {
  const router = useRouter()

  const surveyId = useMemo(() => {
    if (!router.query.surveyId || typeof router.query.surveyId !== "string") {
      return undefined
    }

    return router.query.surveyId
  }, [router.query.surveyId])

  if (!surveyId) return null

  return (
    <>
      <PageMetaTitle>Results</PageMetaTitle>
      <BaseLayout
        cls="bg-gray-50"
        topNav={<TopNav cls="bg-white ring-2 ring-xd-neutral-300" />}
      >
        <SurveyTicker surveyId={surveyId} />
        <main className="page-max-xl pt-4 pb-6 px-4">
          {BREADCRUMBS}
          <div className="space-y-8 pt-4">
            <SurveyResultsAbstract surveyId={surveyId} />
            <QuestionLevelResults surveyId={surveyId} />
            <ResponseTable surveyId={surveyId} />
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
