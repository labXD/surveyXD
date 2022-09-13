import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { signIn, signOut, useSession } from "next-auth/react"
import React, { FC } from "react"

import Logo from "@/public/logo.svg"

import { DropdownMenu } from "./DropdownMenu"

export const TopNav: FC = () => {
  return (
    <nav>
      <div
        className={clsx(
          "p-4 flex justify-between items-center lg:max-w-7xl lg:mx-auto min-h-[64px]"
        )}
      >
        <span className="flex items-center space-x-1">
          <Logo />
          <span className="font-medium">surveyXD</span>
        </span>
        <DropdownMenu />
      </div>
    </nav>
  )
}

export const TopNavComingSoon: FC = () => {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <nav
      className={clsx({
        "bg-white ring-1 ring-neutral-300 sticky top-0 z-10":
          router.pathname.includes("/response"),
      })}
    >
      <div
        className={clsx(
          "p-4 flex flex-col justify-center items-center min-h-[64px]",
          "md:flex-row ",
          "lg:max-w-7xl lg:mx-auto",
          {
            "md:justify-between": !router.pathname.includes("/response"),
          }
        )}
      >
        <Link href={"/"}>
          <a className="flex items-center space-x-1">
            <Logo />
            <span className="font-medium">surveyXD</span>
          </a>
        </Link>
        {!router.pathname.includes("/response") && (
          <button
            className="xd-button-link-inline items-center mt-4 md:mt-[unset]"
            onClick={() =>
              session?.user
                ? signOut({ callbackUrl: "/" })
                : signIn("google", { callbackUrl: "/champ" })
            }
          >
            {session?.user ? (
              <span className="material-symbols-rounded">logout</span>
            ) : (
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
            )}
            <span>
              {session?.user
                ? "Log out"
                : "Sign up with Google for Early Access"}
            </span>
          </button>
        )}
      </div>
    </nav>
  )
}
