import { FC } from "react"

export const Footer: FC = () => {
  return (
    <footer className="pt-8 pb-4 text-center">
      <span className="inline-flex items-center text-xs text-xd-text-primary/[.65]">
        <span className="material-symbols-rounded text-sm">copyright</span>
        {new Date().getFullYear()} surveyXD
      </span>
    </footer>
  )
}
