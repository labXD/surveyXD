import { Listbox, Transition } from "@headlessui/react"
import clsx from "clsx"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { Fragment, useMemo, useState } from "react"

import { BaseLayout, PageMetaTitle, TopNav } from "@/meta/web"
import { trpc } from "@/trpc/web"

export const ResultsPage: NextPage = () => {
  const router = useRouter()

  const surveyId = useMemo(() => {
    if (!router.query.surveyId || typeof router.query.surveyId !== "string") {
      return undefined
    }

    return router.query.surveyId
  }, [router.query.surveyId])

  const { isLoading, data, error } = trpc.useQuery(
    ["survey.getSurveyResponses", { surveyId: surveyId ?? "" }],
    { enabled: !!surveyId }
  )

  const HEADERS = useMemo(() => {
    if (!data) {
      return []
    }
    return data.qustions.map((qs) => qs.title)
  }, [data])

  const [showHeader, setShowHeader] = useState(HEADERS)
  const [tv, setTv] = useState(true)

  const questionValue = useMemo(() => {
    if (!data) {
      return undefined
    }

    return data.qustions.map((q) => ({ question: q.title }))
  }, [data?.qustions])

  const [selected, setSelected] = useState(
    !questionValue || !questionValue[0] ? undefined : questionValue[0]
  )

  const HEADERS_VALUE = useMemo(
    () => [
      "Submitted date",
      "Response ID",
      ...Array.from({ length: HEADERS.length }).map((_, i) => `Q${i + 1}`),
    ],
    [HEADERS]
  )

  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (error || !data) {
    return <h1>Error ${error?.message}</h1>
  }

  return (
    <>
      <PageMetaTitle>Results</PageMetaTitle>
      <BaseLayout
        cls="bg-gray-50"
        topNav={<TopNav cls="bg-white ring-2 ring-xd-neutral-300" />}
      >
        <main className="flex flex-col page-max-xl py-6 px-4">
          <div className="relative flex justify-between space-x-4">
            <div className="flex items-center">
              <span className="material-symbols-outlined text-xd-primary-purple-700">
                document_scanner
              </span>
              <div className="text-lg md:text-xl pl-4 tracking-wider font-medium text-xd-primary-black">
                What is your Appetite Survey
              </div>
            </div>
            <button className="button button-icon-ghost button-sm space-x-2 text-xd-primary-purple-700 ">
              <span className="material-symbols-rounded">
                download_for_offline
              </span>
              <span className="hidden md:block">Export responses</span>
            </button>
          </div>
          <div className="w-full">
            <div className="">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <div>
                    <div className="relative w-full pt-4">
                      <Listbox.Button className="rounded-none w-full button button-outline button-sm text-xs md:text-sm space-x-1 justify-between ring-xd-primary-purple-700/20 ring-2">
                        <span className="material-symbols-rounded">
                          table_rows
                        </span>
                        <span className="block text-left">
                          {selected?.question}
                        </span>
                        <span
                          className={clsx(
                            "flex flex-grow justify-end text-normal material-symbols-rounded"
                          )}
                        >
                          {open ? "expand_less" : "expand_more"}
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="z-10 absolute left-0 bottom-0 right-0 translate-y-full max-h-60 overflow-auto rounded-xs bg-white text-xs md:text-sm drop-shadow-md shadow">
                          {questionValue?.map((option, index) => (
                            <Listbox.Option
                              as={Fragment}
                              key={index}
                              value={option}
                            >
                              {({ selected }) => (
                                <div
                                  className={clsx(
                                    "relative cursor-pointer select-none py-2 px-3 flex items-center space-x-1",
                                    {
                                      "bg-xd-primary-purple-700/10 text-xd-primary-purple-800":
                                        selected,
                                      "text-xd-secondary-black-rgb hover:text-xd-primary-purple-700":
                                        !selected,
                                    }
                                  )}
                                >
                                  <span
                                    className={clsx(
                                      "block truncate font-medium"
                                    )}
                                  >
                                    {option.question}
                                  </span>
                                </div>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </div>
                )}
              </Listbox>
              <div className="relative overflow-auto mt-4">
                <table className="w-full text-sm text-left ">
                  <thead className="text-xs bg-xd-neutral-200 text-xd-primary-black">
                    <tr>
                      <th
                        scope="col"
                        className="py-2 px-4 font-medium border border-xd-neutral-400"
                      >
                        Answer Choices
                      </th>
                      <th
                        scope="col"
                        className="py-2 px-4 font-medium border border-xd-neutral-400"
                      >
                        <span className="flex items-end">Response</span>
                      </th>
                      <th
                        scope="col"
                        className="py-2 px-4 font-medium border border-xd-neutral-400"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-y border-y-xd-neutral-300">
                      <td className="py-2 px-4 border-x border-x-neutral-300">
                        Yes
                      </td>
                      <td className="py-2 px-4 border-x border-x-neutral-300">
                        70%
                      </td>
                      <td className="py-2 px-4 border-x border-x-neutral-300">
                        7
                      </td>
                    </tr>
                    <tr className="bg-white border-y border-y-xd-neutral-300">
                      <td className="py-2 px-4 border-x border-x-neutral-300">
                        No
                      </td>
                      <td className="py-2 px-4 border-x border-x-neutral-300">
                        30%
                      </td>
                      <td className="py-2 px-4 border-x border-x-neutral-300">
                        3
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="relative mt-12">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-xd-primary-purple-700">
                  quiz
                </span>
                <div className="pl-2 uppercase tracking-wider font-medium text-xd-secondary-black-rgb">
                  Responses
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-4 md:mt-[unset] text-sm flex-shrink flex items-center bg-white ring-2 ring-xd-primary-purple-700/20 rounded-full">
                  <button
                    className={clsx(
                      "text-xs button button-sm px-2 py-1 rounded-full min-w-[110px]",
                      {
                        "bg-xd-primary-purple-700/20 text-xd-primary-purple-800":
                          !tv,
                      }
                    )}
                    onClick={() => {
                      setTv(false)
                      setShowHeader(HEADERS)
                    }}
                  >
                    Text Values
                  </button>
                  <button
                    onClick={() => {
                      setTv(true)
                      setShowHeader(HEADERS_VALUE)
                    }}
                    className={clsx(
                      "text-xs button button-sm px-2 py-1 rounded-full min-w-[110px]",
                      {
                        "bg-xd-primary-purple-700/20 text-xd-primary-purple-800":
                          tv,
                      }
                    )}
                  >
                    Numeric Values
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-auto w-full mt-6 max-h-[calc(100vh_-_5rem)]  border border-xd-neutral-400">
            <table className="border-collapse table-auto w-full text-xs md:text-sm text-left">
              <thead className="sticky top-0 bg-xd-neutral-400">
                <tr>
                  {showHeader.map((header, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="border-x border-b border-xd-neutral-400 bg-xd-neutral-200 text-xd-primary-black py-2 px-4 font-medium"
                    >
                      <span className="">{header}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.responses.map((data, rIndex) => (
                  <tr key={rIndex} className="bg-white">
                    <td
                      key={rIndex}
                      className="py-2 px-4 border-x border-b border-xd-neutral-300 w-[unset] md:w-40"
                    >
                      {data.createdAt}
                    </td>
                    <td
                      key={rIndex}
                      className="py-2 px-4 border-x border-b border-xd-neutral-300 w-[unset] md:w-32"
                    >
                      {data.id}
                    </td>
                    {Object.keys(data.answers).map((q) => {
                      const answerText = data.answers[q].map(
                        (ans) => ans.answer.textValue
                      )
                      const answerId = data.answers[q].map(
                        (ans) => ans.answer.id
                      )

                      return (
                        <td
                          key={q}
                          className="py-2 px-4 border-x border-b border-xd-neutral-300"
                        >
                          {!tv ? answerText.join(", ") : answerId.join(", ")}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
