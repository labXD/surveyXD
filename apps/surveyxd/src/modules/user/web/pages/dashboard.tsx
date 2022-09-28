import { NextPage } from "next"

import { BaseLayout, PageMetaTitle } from "@/meta/web"

import { DashboardContainer } from "../container"

export const DashboardPage: NextPage = () => {
  return (
    <>
      <PageMetaTitle>Dashboard</PageMetaTitle>
      <BaseLayout>
        <main className="flex flex-col items-center page-max-xl pt-4 space-y-6">
          <DashboardContainer />
        </main>
      </BaseLayout>
    </>
  )
}
