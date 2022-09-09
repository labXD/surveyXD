import React, { FC } from "react"

import Logo from "@/public/logo.svg"

import { DropdownMenu } from "./DropdownMenu"

export const TopNav: FC = () => {
  return (
    <nav>
      <div className="p-4 flex justify-between items-center lg:max-w-7xl lg:mx-auto min-h-[64px]">
        <span className="flex items-center space-x-1">
          <Logo />
          <span className="font-medium">surveyXD</span>
        </span>
        <DropdownMenu />
      </div>
    </nav>
  )
}
