import "../styles/globals.css";
import type { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
import { BaseLayout } from "@/meta/web/components/BaseLayout";
import { withTRPC } from "@trpc/next";
import { type AppRouter } from "@/trpc/shared/types";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type AppProps<P = unknown> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

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
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </SessionProvider>
    </>
  );
}

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }

  // for deployment
  if (process.env.NEXT_AUTH_URL) {
    return `https://${process.env.NEXT_AUTH_URL}`;
  }

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
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
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(App);
