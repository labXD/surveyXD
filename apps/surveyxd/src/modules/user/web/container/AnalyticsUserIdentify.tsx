import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useAnalytics } from "use-analytics"

export const AnalyticsUserIdentify = () => {
  const { data: sessionData, status } = useSession()
  const analytics = useAnalytics()

  useEffect(() => {
    if (status === "authenticated" && sessionData) {
      analytics.identify(sessionData.user.id, {
        name: sessionData.user.name,
        email: sessionData.user.email,
      })
    }
  }, [status, analytics, sessionData])

  return null
}
