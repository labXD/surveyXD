import type { NextPage } from "next";
import Head from "next/head";
import { signOut, signIn, useSession } from "next-auth/react";
import { useCreateSurvey } from "@/survey/web";

const Home: NextPage = () => {
  const { data: session } = useSession();

  const {createSurvey} = useCreateSurvey()

  return (
    <>
      <Head>
        <title>FormXD - Survey Generator and Data Visualizer</title>
      </Head>

      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-bold bg-indigo-50 text-indigo-700 text-xl p-8 ring ring-indigo-700 rounded-sm">
          Welcome to <a href="https://nextjs.org">SurveyXD</a>
        </h1>
        <button onClick={() => (session?.user ? signOut() : signIn("google"))}>
          {session?.user ? "Sign Out" : "Sign In"}
        </button>

        <button onClick={() => createSurvey()}>Create Survey</button>
      </main>
    </>
  );
};

export default Home;
