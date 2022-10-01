import Lottie from "lottie-react"
import { FC } from "react"

import xdLottieAnimation from "../assets/xd-chart.json"

export const LottieAnimation: FC = () => {
  return <Lottie animationData={xdLottieAnimation} loop />
}

export default LottieAnimation
