import type { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import Link from "next/link"

const XDSandDance = dynamic(() => import("@/survey/web/components/Explorer"), {
  ssr: false,
})

export const ComingSoonPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>surveyXD - Survey Generator and Data Visualizer</title>
      </Head>

      <main className="flex flex-col items-center lg:max-w-7xl lg:mx-auto">
        <div className="px-4 drop-shadow pb-4 space-y-2 text-center max-w-xl">
          <h2 className="text-2xl font-bold text-center text-xd-text-primary">
            See data. Different.
          </h2>
          <p className="text-base text-xd-text-primary/80">
            surveyXD allows you to vizualize survey data in ways that have never
            been possible, so you can make the right decision. Every time.
          </p>
        </div>
        <div className="md:px-4 mx-auto w-full">
          <XDSandDance />
        </div>
        <div className="pt-6">
          <Link href={"/survey/create"}>
            <button className="xd-button w-full">
              <span>Demo create new survey</span>
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}
