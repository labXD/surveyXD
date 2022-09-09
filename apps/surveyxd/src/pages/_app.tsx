import "../styles/globals.css"

import { withTRPC } from "@trpc/next"
import type { AppProps as NextAppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { useMemo } from "react"

import { BaseLayout, TopNav } from "@/meta/web/components"
import { type AppRouter } from "@/trpc/shared/types"

type AppProps<P = unknown> = {
  pageProps: P
} & Omit<NextAppProps<P>, "pageProps">

function App({ Component, pageProps }: AppProps<{ session: Session }>) {
  const route = useRouter()

  const footer = (
    <footer className="p-4 text-center">
      <span className="text-red-100">currently in beta</span>
    </footer>
  )

  // return true if on survey page
  const notCreatePage = useMemo(() => {
    // if (route.pathname.includes("deploy")) return true
    // else return false
    switch (route.pathname) {
      case "/survey/deploy":
      case "/":
        return true
      default:
        return false
    }
  }, [route.pathname])
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <BaseLayout
          cls={!notCreatePage ? "bg-xd-bg" : ""}
          topNav={notCreatePage && <TopNav />}
          footer={notCreatePage && footer}
        >
          <Component {...pageProps} />
        </BaseLayout>
      </SessionProvider>
    </>
  )
}

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return ""
  }

  // for deployment
  if (process.env.NEXT_AUTH_URL) {
    return `https://${process.env.NEXTAUTH_URL}`
  }

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export default withTRPC<AppRouter>({
  config({ ctx: _ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      url: `${getBaseUrl()}/api/trpc`,
      /**
       * @link https://react-query-v3.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(App)
