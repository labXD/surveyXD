import clsx from "clsx"
import Link from "next/link"
import { FC } from "react"

export const NotificationBanner: FC = () => {
  return (
    <div className="bg-xd-warning-100 ring-1 ring-xd-warning-700/50 text-center sticky top-16 z-[9]">
      <div className="text-sm page-max-xl text-xd-warning-700 py-1 flex flex-col sm:flex-row items-center justify-center">
        <Link href="/beta">
          <a
            className={clsx(
              "m-1 order-2 button-link space-x-1 visited:text-xd-primary-purple-700 visited:after:bg-xd-primary-purple-700",
              "sm:order-1"
            )}
          >
            <span className="font-medium">SNEAK PEAK:</span>
            <span>See our future of data visualization</span>
          </a>
        </Link>
        <span
          className={clsx(
            "order-1 m-1 bg-xd-warning-700 text-white px-2 py-1 leading-0 text-xs rounded-full",
            "sm:order-2"
          )}
        >
          currently in beta
        </span>
      </div>
    </div>
  )
}
