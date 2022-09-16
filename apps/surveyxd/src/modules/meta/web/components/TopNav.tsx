import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import React, { FC } from "react"

import Logo from "@/public/assets/surveyxd-landing.svg"

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
          "p-4 flex justify-center items-center min-h-[64px]",
          "lg:max-w-7xl lg:mx-auto"
        )}
      >
        <Link href={"/"}>
          <div className="flex flex-col items-center justify-center">
            <Logo />
            <p className="text-xd-primary-black/[.65]">Coming Soon</p>
          </div>
        </Link>
      </div>
    </nav>
  )
}
