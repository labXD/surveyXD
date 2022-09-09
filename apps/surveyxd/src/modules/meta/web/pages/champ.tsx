import { NextPage } from "next"
import DefaultErrorPage from "next/error"
import Image from "next/image"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"

export const ChampPage: NextPage = () => {
  const router = useRouter()
  const { data: session } = useSession()

  if (!session?.user) return <DefaultErrorPage statusCode={404} />

  return (
    <main className="p-4 xl:max-w-7xl mx-auto text-center flex flex-col items-center space-y-6">
      <Image src="/assets/trophy.png" width={100} height={100} />
      <h1 className="text-3xl font-semibold">
        Thank you for being our Champion!
      </h1>
      <p>
        Keep checking back. You will get access to new futures as they get
        released.
      </p>

      <div>
        <button className="xd-button" onClick={() => router.push("/")}>
          <span className="material-symbols-outlined">arrow_back</span>
          <span>Back to the chart</span>
        </button>
      </div>
    </main>
  )
}
