import { NextPage } from "next"
import { useRouter } from "next/router"

import { BaseLayout, ErrorUI, PageMetaTitle } from "../components"

export const FiveZeroZeroPage: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <PageMetaTitle>Server side error</PageMetaTitle>
      <BaseLayout innerCls="flex flex-col">
        <ErrorUI
          code={500}
          buttonText="Go back"
          buttonIcon="west"
          onClick={() => router.back()}
        >
          It&apos;s a server error, not yours.
        </ErrorUI>
      </BaseLayout>
    </>
  )
}
