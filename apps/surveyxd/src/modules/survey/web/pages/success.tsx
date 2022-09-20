import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { signIn, useSession } from "next-auth/react"

import { BaseLayout, PageMetaTitle } from "@/meta/web"

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
          <section className="bg-xd-warning-100">
            <div className=" text-xd-warning-800 w-full p-4 lg:max-w-3xl lg:mx-auto">
              <p className="font-bold">Don&apos;t lose your data!</p>
              <p>Create an account to get full access.</p>
            </div>
          </section>
        )}
        <main className="px-4 pt-6 flex flex-col items-center xd-layout-width">
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
              className="button-outline button-sm w-full"
              onClick={() => ""}
            >
              <span className="flex-grow text-left truncate">
                {`https://www.surveyxd.com/survey/${surveyId}`}
              </span>
              <span className="material-symbols-rounded">content_copy</span>
            </button>
            <Link href={`/survey/${surveyId}`}>
              <button className="button-primary space-x-2 w-full">
                <span className="material-symbols-sharp">
                  stacked_bar_chart
                </span>
                <span>Go to the survey</span>
              </button>
            </Link>
          </div>
          <div className="text-center pt-8">
            <button
              className="xd-button-link"
              onClick={() =>
                session?.user ? router.push("/dashboard") : signIn("google")
              }
            >
              {session?.user
                ? "Return to your dashboard"
                : "Create an account to save your data!"}
            </button>
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
