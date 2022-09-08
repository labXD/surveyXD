import React, { FC } from "react"

import Logo from "@/public/logo.svg"

export type TopNavProps = {
  hideMenu?: boolean
}
export const TopNav: FC<TopNavProps> = ({ hideMenu }) => {
  return (
    <nav>
      <div className="p-4 flex justify-between items-center lg:max-w-7xl lg:mx-auto">
        <span className="flex items-center space-x-1">
          <Logo />
          <span className="font-medium">surveyXD</span>
        </span>
        {!hideMenu && (
          <button>
            <span className="material-symbols-outlined text-xd-text-primary/80">
              menu
            </span>
          </button>
        )}
      </div>
    </nav>
  )
}
