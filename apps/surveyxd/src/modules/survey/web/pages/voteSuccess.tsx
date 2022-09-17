import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

export const VoteSuccess: FC = () => {
  const router = useRouter()

  const { surveyId } = router.query

  if (!surveyId) {
    return null
  }

  return (
    <div>
      <h1>Sucessfully submitted response</h1>
      <Link href={`/survey/${surveyId}`}>
        <button>Take again</button>
      </Link>
    </div>
  )
}
