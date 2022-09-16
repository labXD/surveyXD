import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

export const Footer: FC = () => {
  const router = useRouter()
  return (
    <footer className="pt-8 pb-4 text-center text-xs text-xd-text-primary/[.65] space-y-2">
      {router.pathname.includes("/response") && (
        <div>This content is neither created nor endorsed by surveyXD</div>
      )}
      <div className="space-x-8">
        <Link href="/">
          <a className="cursor-pointer transition-all hover:text-xd-primary-purple-700">
            <span className="inline-flex items-center">
              labXD
              <span className="material-symbols-rounded text-sm pl-1">
                copyright
              </span>
              {new Date().getFullYear()}
            </span>
          </a>
        </Link>
        <Link href={"/terms"}>
          <span>
            <a className="cursor-pointer transition-all hover:text-xd-primary-purple-700">
              Terms of Use
            </a>
          </span>
        </Link>
        <Link href={"/privacy"}>
          <span className="cursor-pointer transition-all hover:text-xd-primary-purple-700">
            <a>Privacy Policy</a>
          </span>
        </Link>
      </div>
    </footer>
  )
}
