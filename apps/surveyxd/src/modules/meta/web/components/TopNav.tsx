import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { FC } from "react"

import Logo from "@/public/sxd-header-logo-16.svg"

import { HeaderDropdownMenu } from "./DropdownMenu"

export const TopNav: FC = () => {
  return (
    <nav>
      <div
        className={clsx(
          "xd-layout p-4 flex justify-between items-center min-h-[64px]"
        )}
      >
        <Link href={"/"}>
          <span className="cursor-pointer">
            <Logo />
          </span>
        </Link>

        <HeaderDropdownMenu />
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
          <div className="cursor-pointer flex flex-col items-center justify-center">
            <Logo />
            <p className="text-xd-primary-black/[.65]">Coming Soon</p>
          </div>
        </Link>
      </div>
    </nav>
  )
}
