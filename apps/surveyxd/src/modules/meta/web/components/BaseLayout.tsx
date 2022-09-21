import { BaseLayout as XDBaseLayout } from "@labxd/gustxd"
import clsx from "clsx"
import { FC, ReactNode } from "react"

import { Footer } from "./Footer"
import { TopNav } from "./TopNav"
export type BaseLayoutProps = {
  children: ReactNode
  cls?: string
  disableFooter?: boolean
  disableTopNav?: boolean
  footer?: ReactNode
  innerCls?: string
  topNav?: ReactNode
}
export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  cls,
  disableFooter,
  disableTopNav,
  footer,
  innerCls,
  topNav,
}) => {
  return (
    <XDBaseLayout className={cls}>
      <div className={clsx(innerCls, "flex-1")}>
        {(!disableTopNav && topNav) ?? <TopNav />}
        {children}
      </div>
      {(!disableFooter && footer) ?? <Footer />}
    </XDBaseLayout>
  )
}
