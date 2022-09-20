import { BaseLayout as XDBaseLayout } from "@labxd/gustxd"
import { FC, ReactNode } from "react"

import { Footer } from "./Footer"
import { TopNav } from "./TopNav"
export type BaseLayoutProps = {
  children: ReactNode
  cls?: string
  disableFooter?: boolean
  disableTopNav?: boolean
  footer?: ReactNode
  topNav?: ReactNode
}
export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  cls,
  disableFooter,
  disableTopNav,
  footer,
  topNav,
}) => {
  return (
    <XDBaseLayout className={cls}>
      <div className="flex-1">
        {(!disableTopNav && topNav) ?? <TopNav />}
        {children}
      </div>
      {(!disableFooter && footer) ?? <Footer />}
    </XDBaseLayout>
  )
}
