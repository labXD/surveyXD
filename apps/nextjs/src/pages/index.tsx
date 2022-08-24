import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FormXD - Survey Generator and Data Visualizer</title>
      </Head>

      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-bold bg-indigo-50 text-indigo-700 text-xl p-8 ring ring-indigo-700 rounded-sm">
          Welcome to <a href="https://nextjs.org">FormXD</a>
        </h1>
      </main>
    </>
  );
};

export default Home;
