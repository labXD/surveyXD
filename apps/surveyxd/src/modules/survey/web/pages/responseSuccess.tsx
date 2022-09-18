import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { signIn, useSession } from "next-auth/react"

import FireWorksSVG from "@/public/assets/firework-xd.svg"

export const ResponseSuccessPage: NextPage = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const { surveyId } = router.query

  if (!surveyId) {
    return null
  }

  return (
    <>
      <Head>
        <title>Response Submitted - surveyXD</title>
      </Head>
      <main className="p-4 xl:max-w-7xl mx-auto items-center flex flex-col space-y-6">
        <div className="pt-12">
          <h2 className="font-bold">Submission successfully sent.</h2>
        </div>
        <div>
          <FireWorksSVG />
        </div>
        <div className="px-4 w-full max-w-xl">
          <Link href={`/survey/${surveyId}`}>
            <a className="button button-outline w-full ring-xd-primary-purple-700">
              Submit another response.
            </a>
          </Link>
        </div>
        <div className="px-4 max-w-xl flex flex-col w-full space-y-2">
          {!session?.user && (
            <div className="font-semibold text-sm">
              Want to create your own survey?
            </div>
          )}
          <button
            onClick={() =>
              session?.user
                ? router.push("/dashboard")
                : signIn("google", { callbackUrl: "/champ" })
            }
            className="button-primary w-full"
          >
            <span>
              {session?.user ? "Go to your dashboard" : "Create an account"}
            </span>
          </button>
        </div>
      </main>
    </>
  )
}
