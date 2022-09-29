import clsx from "clsx"
import { FC, ReactNode } from "react"

interface LoadingPageInterface {
  center?: boolean
  children?: ReactNode
}
export const LoadingUI: FC<LoadingPageInterface> = ({ center, children }) => {
  return (
    <div
      className={clsx("p-8 animate-pulse w-full flex", {
        "justify-center items-center": center,
      })}
    >
      {children || "Loading..."}
    </div>
  )
}
