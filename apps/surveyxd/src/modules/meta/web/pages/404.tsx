import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"

import { BaseLayout, PageMetaTitle } from "../components"

export const FourZeroFourPage: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <PageMetaTitle>Not found</PageMetaTitle>
      <BaseLayout>
        <main className="fixed -z-[1] inset-0 flex flex-col items-center justify-center">
          <div className="tracking-widest uppercase text-lg font-medium">
            Page not found
          </div>
          <h1 className="text-[9rem] tracking-widest font-bold text-white drop-shadow-lg">
            404
          </h1>
          <div>
            <button
              className="button-primary space-x-4"
              onClick={() => {
                router.back()
              }}
            >
              <span className="material-symbols-rounded">west</span>
              <span>Go back</span>
            </button>
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
