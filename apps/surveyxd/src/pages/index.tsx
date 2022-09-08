import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { signIn, useSession } from "next-auth/react"

import DataImage from "@/public/assets/data-img.png"
import LogoWhite from "@/public/logo-white.svg"
import { useCreateSurvey } from "@/survey/web"
const Home: NextPage = () => {
  const { data: session } = useSession()

  const { createSurvey } = useCreateSurvey()

  return (
    <>
      <Head>
        <title>surveyXD - Survey Generator and Data Visualizer</title>
      </Head>

      <main className="px-4 flex flex-col items-center lg:max-w-7xl lg:mx-auto">
        <div className="max-w-3xl -z-[1] opacity-80">
          <Image src={DataImage} alt="data" />
        </div>
        <div className="drop-shadow lg:-mt-32 pt-6 space-y-2 text-center lg:max-w-xl">
          <h2 className="text-2xl font-bold text-center text-xd-text-primary">
            See data. Different.
          </h2>
          <p className="text-base text-xd-text-primary/80">
            surveyXD allows you to vizualize survey data in ways that have never
            been possible, so you can make the right decision. Every time.
          </p>
        </div>
        <div className="pt-6 space-y-6 w-full lg:max-w-xl">
          <button
            className="xd-button-danger w-full"
            onClick={() => createSurvey()}
          >
            <LogoWhite />
            <span>Create New Survey</span>
          </button>
          {session?.user ? (
            <button
              className="xd-button w-full "
              onClick={() => createSurvey()}
            >
              <span className="material-symbols-outlined">
                <span className="material-symbols-rounded">corporate_fare</span>
              </span>
              <span>Dashboard</span>
            </button>
          ) : (
            <div className="xd-divider">
              <span className="px-4">Or</span>
            </div>
          )}
          {!session?.user && (
            <button
              className="xd-button-secondary w-full"
              onClick={() => signIn("google")}
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_8847_2882)">
                  <path
                    d="M15.0367 8.15396C15.0367 7.70078 14.9999 7.24515 14.9216 6.79932H8.63334V9.36653H12.2343C12.0849 10.1945 11.6047 10.9269 10.9017 11.3924V13.0581H13.05C14.3116 11.897 15.0367 10.1823 15.0367 8.15396Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M8.63333 14.6675C10.4314 14.6675 11.9477 14.0771 13.0525 13.0581L10.9041 11.3924C10.3064 11.799 9.53479 12.0293 8.63578 12.0293C6.89654 12.0293 5.42186 10.8559 4.89274 9.27832H2.67583V10.9955C3.80756 13.2467 6.11266 14.6675 8.63333 14.6675V14.6675Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.8903 9.278C4.61104 8.45003 4.61104 7.55347 4.8903 6.72549V5.0083H2.67583C1.73028 6.89207 1.73028 9.11143 2.67583 10.9952L4.8903 9.278V9.278Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M8.63333 3.9722C9.58378 3.9575 10.5024 4.31514 11.1907 4.97165L13.0941 3.06828C11.8889 1.93655 10.2893 1.31435 8.63333 1.33395C6.11266 1.33395 3.80756 2.75473 2.67583 5.00839L4.89029 6.72558C5.41696 5.14557 6.89409 3.9722 8.63333 3.9722V3.9722Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8847_2882">
                    <rect
                      width="13.3333"
                      height="13.3333"
                      fill="white"
                      transform="translate(1.83334 1.3335)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Sign in with Google</span>
            </button>
          )}
        </div>
      </main>
    </>
  )
}

export default Home
