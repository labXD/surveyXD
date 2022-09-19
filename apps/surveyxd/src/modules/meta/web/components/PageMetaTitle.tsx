import Head from "next/head"
import { FC } from "react"

interface PageMetaTitleInterface {
  children: string
  primary?: boolean
}

export const PageMetaTitle: FC<PageMetaTitleInterface> = ({
  children,
  primary,
}) => {
  return (
    <Head>
      <title>
        {children}
        {!primary && " - surveyXD"}
      </title>
    </Head>
  )
}
