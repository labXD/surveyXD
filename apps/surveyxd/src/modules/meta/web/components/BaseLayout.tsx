import React, { FC } from "react"

export type BaseLayoutProps = {
  children: React.ReactNode
  footer?: React.ReactNode
  topNav?: React.ReactNode
}
export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  footer,
  topNav,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {topNav}
        {children}
      </div>
      {footer}
    </div>
  )
}
