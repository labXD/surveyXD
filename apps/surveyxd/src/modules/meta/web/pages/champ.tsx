import { NextPage } from "next"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"

import FireWorksSVG from "../assets/firework-xd.svg"
import LogoGoogle from "../assets/google.svg"
import LogoWhite from "../assets/logo-white.svg"
import { BaseLayout, PageMetaTitle } from "../components"

export const ChampPage: NextPage = () => {
  const { data: session } = useSession()

  return (
    <>
      <PageMetaTitle>Welcome</PageMetaTitle>
      <BaseLayout>
        <main className="p-4 xl:max-w-7xl mx-auto text-center flex flex-col items-center space-y-6">
          <h1 className="text-2xl font-bold">
            {session ? "Congratulations!" : "Be our champion!"}
          </h1>
          <p className="text-xd-secondary-black-rgb max-w-xl">
            {session
              ? "You joined the pre-release of surveyXD, which means "
              : "Join the pre-release of surveyXD and "}
            you&apos;ll be the first to know about the newest features and have
            early access to exclusive benefits.
          </p>
          <div>
            <FireWorksSVG />
          </div>
          <div className="space-y-4 w-full max-w-xl">
            <Link href={"/survey/create"}>
              <button className="button button-red space-x-4 w-full">
                <span className="animate-spin-slow">
                  <LogoWhite />
                </span>
                <span>Create new survey</span>
              </button>
            </Link>
            {!session?.user && (
              <button
                className="button button-outline w-full space-x-6"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "/user/dashboard",
                  })
                }
              >
                <span>
                  <LogoGoogle />
                </span>
                <span>Sign up with Google</span>
              </button>
            )}
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
