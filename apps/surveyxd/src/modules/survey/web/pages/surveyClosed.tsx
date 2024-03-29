import { NextPage } from "next"
import { useRouter } from "next/router"

import { BaseLayout, ErrorUI, PageMetaTitle } from "@/meta/web"

export const SurveyClosedPage: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <PageMetaTitle>Survey closed</PageMetaTitle>
      <BaseLayout innerCls="flex flex-col">
        <ErrorUI
          code={
            <span className="material-symbols-rounded text-[7rem] md:text-[9rem] ">
              visibility_off
            </span>
          }
          buttonText="Back to home"
          buttonIcon="west"
          onClick={() => router.replace("/")}
        >
          The survey is not active
        </ErrorUI>
      </BaseLayout>
    </>
  )
}
