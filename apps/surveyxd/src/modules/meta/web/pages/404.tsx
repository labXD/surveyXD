import { NextPage } from "next"
import { useRouter } from "next/router"

import { BaseLayout, ErrorUI, PageMetaTitle } from "../components"

export const FourZeroFourPage: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <PageMetaTitle>Not found</PageMetaTitle>
      <BaseLayout innerCls="flex flex-col">
        <ErrorUI
          code={404}
          buttonText="Go back"
          buttonIcon="west"
          onClick={() => router.back()}
        >
          Page not found
        </ErrorUI>
      </BaseLayout>
    </>
  )
}
