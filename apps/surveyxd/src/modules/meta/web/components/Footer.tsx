import { useRouter } from "next/router"
import { FC } from "react"

export const Footer: FC = () => {
  const router = useRouter()
  return (
    <footer className="pt-8 pb-4 text-center text-xs text-xd-text-primary/[.65] space-y-2">
      {router.pathname.includes("/response") && (
        <div>This content is neither created nor endorsed by surveyXD</div>
      )}
      <div className="inline-flex items-center">
        <span className="material-symbols-rounded text-sm">copyright</span>
        {new Date().getFullYear()} surveyXD
      </div>
    </footer>
  )
}
