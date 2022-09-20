import clsx from "clsx"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { signIn, useSession } from "next-auth/react"

import { XDSandDanceNoSSR } from "@/survey/web"

import { BaseLayout, PageMetaTitle } from "../components"

export const ComingSoonPage: NextPage = () => {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <>
      <PageMetaTitle>Coming soon</PageMetaTitle>
      <BaseLayout>
        <main className="flex flex-col items-center lg:max-w-7xl lg:mx-auto pt-4">
          <div className="px-4 max-w-xl text-center">
            <p className="text-base text-xd-secondary-black-rgb">
              A next-gen, interactive visual experience for viewing survey data.
            </p>
          </div>
          <div className="md:px-4 mx-auto w-full pt-8">
            <XDSandDanceNoSSR />
          </div>
          <div className="px-4 pt-6 max-w-xl flex flex-col w-full space-y-2">
            {!session?.user && (
              <div className="font-semibold text-sm">
                Get notified when we launch
              </div>
            )}
            <button
              onClick={() =>
                session?.user
                  ? router.push("/dashboard")
                  : signIn("google", { callbackUrl: "/champ" })
              }
              className={clsx(" w-full", {
                "button-primary": !session?.user,
                "button-outline": session?.user,
              })}
            >
              <span>
                {session?.user
                  ? "Go to your dashboard"
                  : "Subscribe with your google account"}
              </span>
            </button>
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
