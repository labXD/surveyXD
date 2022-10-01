import type { NextPage } from "next"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"

import LogoGoogle from "../assets/google.svg"
import LogoWhite from "../assets/logo-white.svg"
import { BaseLayout, NotificationBanner, PageMetaTitle } from "../components"
import { LottieNoSSR } from "../containers"

export const LandingPage: NextPage = () => {
  const { data: session } = useSession()

  return (
    <>
      <PageMetaTitle primary>
        surveyXD - Survey Generator and Data Visualizer
      </PageMetaTitle>
      <BaseLayout>
        <NotificationBanner />
        <main className="px-4 flex flex-col items-center page-max-xl">
          <div className="md:-mt-12 max-w-2xl opacity-70 -z-[1]">
            <LottieNoSSR />
          </div>
          <div className="md:px-8 lg:px-4 md:-mt-12 py-2 space-y-2 text-center lg:max-w-xl z-[1]">
            <h2 className="text-2xl font-bold text-center text-xd-primary-black drop-shadow-sm">
              Create surveys. See data. Different.
            </h2>
            <p className="text-base text-xd-secondary-black-rgb">
              surveyXD is a survey generator that allows you to vizualize data
              in ways that have never been possible, so you can make the right
              decision. Every time.
            </p>
          </div>
          <div className="md:px-8 pt-6 space-y-6 w-full lg:max-w-xl z-[1]">
            <Link href="/survey/create">
              <button className="button button-red space-x-4 w-full">
                <span className="animate-spin-slow">
                  <LogoWhite />
                </span>
                <span>Create new survey</span>
              </button>
            </Link>
            <div className="xd-divider">
              <span className="px-4">Or</span>
            </div>
            {session?.user ? (
              <Link href="/user/dashboard">
                <button className="button button-primary w-full space-x-4">
                  <span className="material-symbols-rounded">
                    <span className="material-symbols-rounded">
                      corporate_fare
                    </span>
                  </span>
                  <span>Go to your dashboard</span>
                </button>
              </Link>
            ) : (
              <button
                className="button button-outline w-full space-x-6"
                onClick={() => signIn("google", { callbackUrl: "/champ" })}
              >
                <span>
                  <LogoGoogle />
                </span>
                <span>1-Click Sign Up</span>
              </button>
            )}
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
