import dynamic from "next/dynamic"

export const XDSandDanceNoSSR = dynamic(
  () => import("@/survey/web/components/Explorer"),
  {
    ssr: false,
  }
)
