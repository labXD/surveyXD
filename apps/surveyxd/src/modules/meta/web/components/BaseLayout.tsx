import clsx from "clsx"
import React, { FC } from "react"
export type BaseLayoutProps = {
  children: React.ReactNode
  cls?: string
  footer?: React.ReactNode
  topNav?: React.ReactNode
}
export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  cls,
  footer,
  topNav,
}) => {
  return (
    <div className={clsx(cls, "flex flex-col min-h-screen")}>
      <div className="flex-1">
        {topNav}
        {children}
      </div>
      {footer}
    </div>
  )
}
