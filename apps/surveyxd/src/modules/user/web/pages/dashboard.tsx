import { NextPage } from "next"

import {
  BaseLayout,
  NotificationBanner,
  PageMetaTitle,
  TopNav,
} from "@/meta/web"

import { DashboardContainer } from "../container"

export const DashboardPage: NextPage = () => {
  return (
    <>
      <PageMetaTitle>Dashboard</PageMetaTitle>
      <BaseLayout
        topNav={
          <TopNav cls="sticky top-0 bg-white z-10 ring-1 ring-xd-warning-700/50" />
        }
      >
        <NotificationBanner />
        <main className="flex flex-col items-center page-max-xl pt-4 space-y-6">
          <DashboardContainer />
        </main>
      </BaseLayout>
    </>
  )
}
