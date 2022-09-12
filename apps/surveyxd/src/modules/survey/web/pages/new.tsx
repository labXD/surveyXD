import { Tab } from "@headlessui/react"
import clsx from "clsx"
import { NextPage } from "next"
import Head from "next/head"

import { XDDropdownMenu } from "@/meta/web"
import { Question } from "@/survey/web/components"

import { useActiveSurveyFromRoute } from "../hooks"

export const NewSurveyPage: NextPage = () => {
  const { loading } = useActiveSurveyFromRoute()

  if (loading) {
    return <div>Loading...</div>
  }

  // TODO: handle remaining statuses

  const TABS = ["Questions"]

  const menuItemArray = [
    {
      label: "Dashboard",
      icon: "corporate_fare",
    },
  ]

  return (
    <>
      <Head>
        <title>Create survey - surveyXD</title>
      </Head>

      <Tab.Group as={"div"} className="lg:max-w-7xl lg:mx-auto">
        <section className="pt-4 pb-3 bg-white shadow-md ring-1 ring-inset ring-neutral-200 sticky top-0 z-10">
          <div className="relative mx-4 border-b border-b-neutral-300 flex items-baseline justify-between">
            <input
              type="text"
              placeholder="Survey Title"
              className={clsx("w-full")}
            />
            <XDDropdownMenu data={menuItemArray} />
          </div>
          <Tab.List className="flex px-4 space-x-6">
            {TABS.map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  clsx("pb-2 pt-3 border-b-2 font-semibold transition-all", {
                    "text-xd-text-primary/[.65] border-b-transparent":
                      !selected,
                    "text-xd-primary-700  border-b-xd-primary-700": selected,
                  })
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
        </section>
        <Tab.Panels className="mt-4">
          <Tab.Panel as="div" className={"space-y-4 overflow-auto pb-20"}>
            <Question />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="fixed bottom-0 left-4 right-4 z-10 ">
        <div className="bg-white flex justify-between p-4 rounded-t-lg drop-shadow-lg ring-2 ring-indigo-50        lg:max-w-3xl lg:mx-auto">
          <button>
            <span className="material-symbols-rounded text-xd-text-primary/80">
              add
            </span>
          </button>
          <button>
            <span className="material-symbols-rounded text-xd-text-primary/80">
              send
            </span>
          </button>
          <button>
            <span className="material-symbols-rounded text-xd-text-primary/80">
              person
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
