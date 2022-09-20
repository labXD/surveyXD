import "../styles/globals.css"

import { withTRPC } from "@trpc/next"
import type { AppProps as NextAppProps } from "next/app"
import Head from "next/head"
import { Session } from "next-auth"
import { SessionProvider, signOut } from "next-auth/react"

import { type AppRouter } from "@/trpc/shared/types"

type AppProps<P = unknown> = {
  pageProps: P
} & Omit<NextAppProps<P>, "pageProps">

function App({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        <div className="fixed bottom-4 right-4">
          <button
            className="button-primary opacity-0 hover:opacity-100 transition-all z-20"
            onClick={() => signOut()}
          >
            Sign jout
          </button>
        </div>
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
