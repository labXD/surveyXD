import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

export const Footer: FC = () => {
  const router = useRouter()

  const responsePage = () => {
    if (router.pathname.startsWith("/survey")) {
      const split = router.pathname.split("/")
      if (split.length === 3) {
        return (
          <div>This content is neither created nor endorsed by surveyXD</div>
        )
      }
    }
    return
  }
  return (
    <footer className="pt-8 pb-4 text-center text-xs text-xd-neutral-700 space-y-2">
      {responsePage()}
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
