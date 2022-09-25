import { NextPage } from "next"
import Link from "next/link"

import { BaseLayout, PageMetaTitle } from "@/meta/web"

import { XDSandDanceNoSSR } from "../containers"

export const ResultChartsPage: NextPage = () => {
  return (
    <>
      <PageMetaTitle>Results</PageMetaTitle>
      <BaseLayout>
        <main className="flex flex-col items-center page-max-xl pt-4">
          <div className="px-4 max-w-xl text-center">
            <h1>Survey Results</h1>
          </div>
          <div className="md:px-4 mx-auto w-full pt-8">
            <XDSandDanceNoSSR />
          </div>
          <div className="px-4 pt-6 max-w-xl flex flex-col w-full space-y-2">
            <Link href="/user/dashboard">
              <button className="button button-outline">
                Back to your dashboard
              </button>
            </Link>
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
