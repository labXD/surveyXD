import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"

import DataImage from "@/public/assets/data-img.png"

export const SuccessPage: NextPage = () => {
  const { data: session } = useSession()
  return (
    <>
      <Head>
        <title>surveyXD - Survey Generator and Data Visualizer</title>
      </Head>
      {!session?.user && (
        <section className="bg-yellow-50">
          <div className=" text-yellow-800 w-full p-4 flex flex-wrap lg:max-w-7xl lg:mx-auto">
            <span className="font-bold pr-2">The data is temporary!</span>
            <span>
              <button
                className="font-medium xd-button-link animate-pulse hover:animate-[unset] "
                onClick={() => signIn("google")}
              >
                Click to create an account
              </button>{" "}
              and save your data!
            </span>
          </div>
        </section>
      )}
      <main className="px-4 pt-6 flex flex-col items-center lg:max-w-7xl lg:mx-auto">
        <div className="max-w-3xl -z-[1] opacity-80">
          <Image src={DataImage} alt="data" />
        </div>
        <div className="lg:-mt-32 pt-6 space-y-2 text-center lg:max-w-xl">
          <h2 className="text-2xl font-bold text-center text-xd-text-primary">
            Survey is Live!
          </h2>
          <p className="text-base text-xd-text-primary/80">
            Send the link and view the results.
          </p>
        </div>
        <div className="pt-6 space-y-6 w-full lg:max-w-xl">
          <button className="xd-button-secondary w-full" onClick={() => ""}>
            <span className="flex-grow text-left truncate">
              https://www.surveyxd.com/live/dke34Df
            </span>
            <span className="material-symbols-rounded">content_copy</span>
          </button>
          <Link href={"/survey/09162022"}>
            <button className="xd-button w-full">
              <span className="material-symbols-rounded">
                stacked_bar_chart
              </span>
              <span>Take the survey</span>
            </button>
          </Link>
        </div>
        {!session?.user && (
          <div className="text-center pt-8">
            <button className="xd-button-link" onClick={() => signIn("google")}>
              Create an account to save your data!
            </button>
          </div>
        )}
      </main>
    </>
  )
}
