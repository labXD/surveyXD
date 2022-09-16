import type { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import { signIn, useSession } from "next-auth/react"

const XDSandDance = dynamic(() => import("@/survey/web/components/Explorer"), {
  ssr: false,
})

export const ComingSoonPage: NextPage = () => {
  const { data: session } = useSession()
  return (
    <>
      <Head>
        <title>surveyXD - Survey Generator and Data Visualizer</title>
      </Head>

      <main className="flex flex-col items-center lg:max-w-7xl lg:mx-auto pt-4">
        <div className="px-4 max-w-xl text-center">
          <p className="text-base text-xd-text-primary/80">
            A next-gen, interactive visual experience for viewing survey data.
          </p>
        </div>
        <div className="md:px-4 mx-auto w-full pt-8">
          <XDSandDance />
        </div>
        {!session?.user && (
          <div className="px-4 pt-6 max-w-xl flex flex-col w-full space-y-2">
            <div className="font-semibold text-sm">
              Get notified when we launch
            </div>
            <button
              onClick={() => signIn("google", { callbackUrl: "/champ" })}
              className="button-primary w-full"
            >
              <span>Subscribe with your google account</span>
            </button>
          </div>
        )}
      </main>
    </>
  )
}
