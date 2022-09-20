import { NextPage } from "next"
import DefaultErrorPage from "next/error"
import Link from "next/link"
import { useSession } from "next-auth/react"

import FireWorksSVG from "../assets/firework-xd.svg"
import LogoWhite from "../assets/logo-white.svg"
import { BaseLayout, PageMetaTitle } from "../components"

export const ChampPage: NextPage = () => {
  const { data: session } = useSession()

  if (!session?.user) return <DefaultErrorPage statusCode={404} />

  return (
    <>
      <PageMetaTitle>Welcome</PageMetaTitle>
      <BaseLayout>
        <main className="p-4 xl:max-w-7xl mx-auto text-center flex flex-col items-center space-y-6">
          <h1 className="text-2xl font-bold">Congratulations!</h1>
          <p className="text-xd-secondary-black-rgb max-w-xl">
            You joined the pre-release of surveyXD, which means you&apos;ll be
            the first to know about the newest features and have early access to
            exclusive benefits.
          </p>
          <div>
            <FireWorksSVG />
          </div>
          <div className="space-y-4 w-full max-w-xl">
            <Link href={"/survey/create"}>
              <button className="button-red space-x-4 w-full">
                <span className="animate-spin-slow">
                  <LogoWhite />
                </span>
                <span>Create new survey</span>
              </button>
            </Link>
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
