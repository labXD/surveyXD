import dynamic from "next/dynamic"

export const LottieNoSSR = dynamic(
  () => import("@/meta/web/components/LottieAnimation"),
  {
    ssr: false,
  }
)
