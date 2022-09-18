import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"

import LogoGoogle from "@/public/assets/google.svg"
import LogoWhite from "@/public/logo-white.svg"

export const LandingPage: NextPage = () => {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>surveyXD - Survey Generator and Data Visualizer</title>
      </Head>

      <main className="px-4 flex flex-col items-center xd-layout-width">
        <div className="max-w-2xl opacity-70">
          <Image
            className="w-auto"
            src="/assets/data-img.png"
            width={800}
            height={400}
          />
        </div>
        <div className="md:-mt-36 pt-2 pb-2 space-y-2 text-center lg:max-w-xl z-[1]">
          <h2 className="text-2xl font-bold text-center text-xd-primary-black drop-shadow-sm">
            See data. Different.
          </h2>
          <p className="text-base text-xd-secondary-black-rgb">
            surveyXD allows you to vizualize survey data in ways that have never
            been possible, so you can make the right decision. Every time.
          </p>
        </div>
        <div className="pt-6 space-y-6 w-full lg:max-w-xl z-[1]">
          <Link href="/survey/create">
            <button className="button-red space-x-4 w-full bg-xd-secondary-red-700">
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
            <Link href="/dashboard">
              <button className="button-primary w-full space-x-4">
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
              className="button-outline w-full space-x-6"
              onClick={() => signIn("google")}
            >
              <span>
                <LogoGoogle />
              </span>
              <span>Sign up with Google</span>
            </button>
          )}
        </div>
      </main>
    </>
  )
}
