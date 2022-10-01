import { FC } from "react"
import Lottie from "react-lottie"

import xdLottieAnimation from "../assets/xd-chart.json"

export const LottieAnimation: FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: xdLottieAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return <Lottie options={defaultOptions} />
}

export default LottieAnimation
