import clsx from "clsx"
import { format } from "date-fns"
import { NextPage } from "next"
import Link from "next/link"

import { BaseLayout, PageMetaTitle, TopNav } from "@/meta/web"

import { XDSandDanceNoSSR } from "../containers"

const BREADCRUMBS = (
  <header className="flex items-center justify-between">
    <div className="flex justify-start items-center text-xs leading-none divide-x-2 text-xd-disabled-black-rgb select-none">
      <Link href="/" replace>
        <a className="text-sky-500 hover:text-sky-600 transition-all space-x-2 flex items-center pr-4">
          <span className="text-base material-symbols-rounded">
            keyboard_backspace
          </span>
          <span>Home</span>
        </a>
      </Link>
      <span className="px-4">Survey Results</span>
    </div>
  </header>
)
export const ResultChartsPage: NextPage = () => {
  const DummyTicker = (
    <div
      className={clsx(
        "ring-1 ring-inset",
        "text-xd-primary-black bg-xd-success-800/[0.05] ring-xd-success-800"
      )}
    >
      <div className="page-max-xl flex flex-col md:flex-row px-4 items-center justify-between py-4 md:py-1 text-sm space-x-0 space-y-2 md:space-y-0 md:space-x-1">
        <div
          className={clsx(
            "text-xd-success-800 flex items-center space-x-2 px-4 py-1 leading-0 rounded-full"
          )}
          title="Status"
        >
          <span className={clsx("text-base material-symbols-sharp")}>
            circle
          </span>
          <span className="font-medium">Published</span>
        </div>
        {/* Response Count */}
        <div className="flex items-center space-x-2" title="Response count">
          <span className="text-lg material-symbols-outlined">group</span>
          <span>500</span>
        </div>
        <div className="flex items-center space-x-2" title="Published date">
          <span className="text-lg material-symbols-rounded">
            event_available
          </span>
          <span>{format(new Date(), "yyyy-MM-dd | hh:mm a")}</span>
        </div>
        {/* Last update */}
        <div className="flex items-center space-x-2" title="Published date">
          <span className="text-lg material-symbols-rounded">
            published_with_changes
          </span>
          <span>{format(new Date(), "yyyy-MM-dd | hh:mm a")}</span>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageMetaTitle>Results</PageMetaTitle>
      <BaseLayout
        cls="bg-gray-50"
        topNav={<TopNav cls="bg-white ring-2 ring-xd-neutral-300" />}
      >
        {DummyTicker}
        <main className="page-max-xl pt-4 pb-6 px-4">
          {BREADCRUMBS}
          <div className="md:px-4 mx-auto w-full pt-8">
            <XDSandDanceNoSSR />
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
