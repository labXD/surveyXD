import copy from "copy-to-clipboard"
import { type NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { signIn, useSession } from "next-auth/react"

import { BaseLayout, linkCopyToast, PageMetaTitle, Toaster } from "@/meta/web"

import DataImage from "../assets/data-img.png"

export const SuccessPage: NextPage = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const { surveyId } = router.query

  return (
    <>
      <PageMetaTitle>Survey created</PageMetaTitle>
      <BaseLayout>
        {!session?.user && (
          <section className="bg-xd-warning-100 ring-1 ring-xd-warning-700/50 ">
            <div className=" text-xd-warning-800 w-full p-4 lg:max-w-3xl lg:mx-auto">
              <p className="font-bold">Don&apos;t lose your data!</p>
              <p className="sm:space-x-1">
                <span>Create an account to get full access.</span>
                <button
                  className="button-link"
                  onClick={() =>
                    session?.user
                      ? router.push("/user/dashboard")
                      : signIn("google", {
                          callbackUrl: `/api/v0/rest/survey/${surveyId}/attacher/anon-user`,
                        })
                  }
                >
                  Click to create an account
                </button>
              </p>
            </div>
          </section>
        )}
        <main className="px-4 pt-6 flex flex-col items-center page-max-xl">
          <div className="max-w-2xl opacity-70">
            <Image
              className="w-auto"
              src={DataImage}
              width={800}
              height={400}
            />
          </div>
          <div className="lg:-mt-36 pt-6 space-y-2 text-center lg:max-w-xl z-[1]">
            <h2 className="text-2xl font-bold text-center text-xd-primary-black">
              Survey is Live!
            </h2>
            <p className="text-base text-xd-secondary-black-rgb">
              Send the link and view the results.
            </p>
          </div>
          <div className="pt-6 space-y-6 w-full lg:max-w-xl z-[1]">
            <button
              title="Copy link"
              className="button button-outline button-sm w-full"
              onClick={() => {
                // copy(`${process.env.NEXT_PUBLIC_URL}/survey/${surveyId}`)
                copy(`https://surveyxd.com/survey/${surveyId}`)
                linkCopyToast()
              }}
            >
              <span className="flex-grow text-left truncate">
                {/* {`${process.env.NEXT_PUBLIC_URL}/survey/${surveyId}`} */}
                {`https://surveyxd.com/survey/${surveyId}`}
              </span>
              <span className="material-symbols-rounded">content_copy</span>
            </button>

            <Link href={`/survey/${surveyId}`}>
              <button className="button button-primary space-x-2 w-full">
                <span className="material-symbols-sharp">
                  stacked_bar_chart
                </span>
                <span>Go to the survey</span>
              </button>
            </Link>
          </div>
          <div className="text-center pt-8">
            <button
              className="button-link"
              onClick={() =>
                session?.user
                  ? router.push("/user/dashboard")
                  : signIn("google", {
                      callbackUrl: `/api/v0/rest/survey/${surveyId}/attacher/anon-user`,
                    })
              }
            >
              {session?.user
                ? "Go to your dashboard"
                : "Create an account to save your data!"}
            </button>
          </div>
        </main>
        <Toaster />
      </BaseLayout>
    </>
  )
}
