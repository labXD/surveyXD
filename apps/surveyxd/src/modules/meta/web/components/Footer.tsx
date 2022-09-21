import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { type FC, ReactNode } from "react"

interface FooterInterface {
  children?: ReactNode
}
export const Footer: FC<FooterInterface> = ({ children }) => {
  const router = useRouter()

  return (
    <footer
      className={clsx(
        "py-4 text-center text-xs text-xd-neutral-700 space-y-2",
        {
          hidden: router.pathname.includes("create"),
        }
      )}
    >
      {children}
      <div className="space-x-1">
        <Link href="https://www.labxd.com" target="_blank">
          <a className="cursor-pointer transition-all border-b border-b-xd-neutral-700">
            <span className="inline-flex items-center">
              labXD
              <span className="material-symbols-rounded text-sm">
                copyright
              </span>
              {new Date().getFullYear()}
            </span>
          </a>
        </Link>

        <span>&ndash;</span>
        <Link href={"/terms"}>
          <a className="cursor-pointer transition-all border-b border-b-xd-neutral-700">
            Terms of Use
          </a>
        </Link>
        <span>&ndash;</span>
        <Link href={"/privacy"}>
          <a className="cursor-pointer transition-all border-b border-b-xd-neutral-700">
            Privacy Policy
          </a>
        </Link>
      </div>
    </footer>
  )
}
