import { Listbox, Transition } from "@headlessui/react"
import clsx from "clsx"
import { FC, Fragment, useEffect, useMemo, useState } from "react"

import { ErrorPage, LoadingUI } from "@/meta/web"
import { trpc } from "@/trpc/web"

import { SurveyIdInterface } from "../types"

export const QuestionLevelResults: FC<SurveyIdInterface> = ({ surveyId }) => {
  const { isLoading, data, error } = trpc.useQuery([
    "survey.getSurveyResponses",
    { surveyId },
  ])

  const { data: surveyQuestionStatsData } = trpc.useQuery([
    "survey.getSurveyStats",
    { surveyId },
  ])

  const questionValue = useMemo(() => {
    if (!surveyQuestionStatsData) {
      return undefined
    }
    return surveyQuestionStatsData.map((q, index) => ({
      question: q.questionText,
      value: index,
      id: q.questionId,
    }))
  }, [surveyQuestionStatsData])

  const [selected, setSelected] = useState(
    !questionValue || !questionValue[0] ? undefined : questionValue[0]
  )

  useEffect(() => {
    if (data && questionValue) setSelected(questionValue[0])
  }, [data])

  if (isLoading) {
    return <LoadingUI />
  }

  if (error || !data) {
    return <ErrorPage>Question Error {error?.message}</ErrorPage>
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center space-x-2 text-xd-primary-black">
          <span className="text-lg material-symbols-outlined text-xd-secondary-black-rgb">
            quiz
          </span>
          <div className="tracking-wider font-medium">Questions</div>
        </div>
      </div>

      <div className="space-y-2">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <div>
              <div className="relative w-full">
                <Listbox.Button className="w-full button button-outline button-sm text-xs md:text-sm space-x-2 justify-between ring-xd-primary-purple-700/30">
                  <span className="min-w-[1.5rem]">Q{selected?.value}:</span>
                  <span className="block text-left">{selected?.question}</span>
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
                  <Listbox.Options className="z-10 mt-1 absolute left-0 bottom-0 right-0 translate-y-full max-h-60 overflow-auto rounded-xs bg-white text-xs md:text-sm drop-shadow-md shadow">
                    {questionValue?.map((option, index) => (
                      <Listbox.Option as={Fragment} key={index} value={option}>
                        {({ selected }) => (
                          <div
                            className={clsx(
                              "relative cursor-pointer select-none py-2 px-3 flex items-center space-x-2",
                              {
                                "bg-xd-primary-purple-700/10 text-xd-primary-purple-800":
                                  selected,
                                "text-xd-secondary-black-rgb hover:text-xd-primary-purple-700":
                                  !selected,
                              }
                            )}
                          >
                            <span className="min-w-[1.5rem]">Q{index}:</span>
                            <span className={clsx("block truncate")}>
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
        <div className="relative overflow-auto">
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
                  <span className="flex items-end">Percentage</span>
                </th>
                <th
                  scope="col"
                  className="py-2 px-4 font-medium border border-xd-neutral-400"
                >
                  Count
                </th>
              </tr>
            </thead>
            <tbody>
              {surveyQuestionStatsData
                ?.find((v) => v.questionId === selected?.id)
                ?.ans.map((option, index) => (
                  <tr
                    key={index}
                    className="bg-white border-y border-y-xd-neutral-300"
                  >
                    <td className="py-2 px-4 border-x border-x-neutral-300">
                      {option.textValue}
                    </td>
                    <td className="py-2 px-4 border-x border-x-neutral-300">
                      {Math.round(option.resCountPerct * 100)} %
                    </td>
                    <td className="py-2 px-4 border-x border-x-neutral-300">
                      {option.resCount}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
