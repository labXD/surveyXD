import { NextPage } from "next"
import DefaultErrorPage from "next/error"
import Head from "next/head"
import Link from "next/link"
import { useSession } from "next-auth/react"

import FireWorksSVG from "@/public/assets/firework-xd.svg"
export const ChampPage: NextPage = () => {
  const { data: session } = useSession()

  if (!session?.user) return <DefaultErrorPage statusCode={404} />

  return (
    <>
      <Head>
        <title>You are in! - surveyXD</title>
      </Head>
      <main className="p-4 xl:max-w-7xl mx-auto text-center flex flex-col items-center space-y-6">
        <h1 className="text-2xl font-bold">Congratulations!</h1>
        <p className="text-xd-text-primary-black/80">
          You joined the pre-release of surveyXD, which means you&apos;ll be the
          first to know about the newest features and have early access to
          exclusive benefits.
        </p>
        <div>
          <FireWorksSVG />
        </div>
        <div className="space-y-4 w-full max-w-xl">
          <Link href={"/"}>
            <button className="button-primary space-x-2 w-full">
              <span className="text-sm material-symbols-rounded">
                arrow_back
              </span>
              <span>Back to chart</span>
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}
