import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import DataImage from "@/public/assets/data-img.png"

export const DeployPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>surveyXD - Survey Generator and Data Visualizer</title>
      </Head>
      <section className="bg-yellow-50">
        <div className=" text-yellow-800 w-full px-4 py-2 flex justify-between items-baseline lg:max-w-7xl lg:mx-auto">
          <span>
            <p className="font-bold">Don’t lose your data!</p>
            <p> Create an account to get full access</p>
          </span>
          <span className="material-symbols-outlined">cancel</span>
        </div>
      </section>
      <main className="px-4 pt-6 flex flex-col items-center lg:max-w-7xl lg:mx-auto">
        <Image src={DataImage} alt="data" />
        <div className="pt-6 space-y-2 text-center lg:max-w-xl">
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
              https://www.surveyxd.com/live/dke34Dfdsafasfsadfs
            </span>
            <span className="material-symbols-outlined">content_copy</span>
          </button>
          <button
            className="xd-button-danger w-full bg-xd-purple-primary ring-xd-purple-secondary"
            onClick={() => ""}
          >
            <span className="material-symbols-outlined">stacked_bar_chart</span>
            <span>View Results</span>
          </button>
        </div>
      </main>
    </>
  )
}
