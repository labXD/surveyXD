import dynamic from "next/dynamic"

// This is the component that will not be rendered on the server
export const XDSandDanceNoSSR = dynamic(
  () => import("@/survey/web/components/Explorer"),
  {
    ssr: false,
  }
)
