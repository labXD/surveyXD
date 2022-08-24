import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { BaseLayout } from "@/meta/web/components/BaseLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
}

export default MyApp;
