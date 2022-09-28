import { Switch } from "@headlessui/react"
import clsx from "clsx"
import { format } from "date-fns"
import { FC, useState } from "react"

import { ErrorPage, LoadingUI } from "@/meta/web"
import { trpc } from "@/trpc/web"

import { SurveyIdInterface } from "../types"

export const ResponseTable: FC<SurveyIdInterface> = ({ surveyId }) => {
  const { isLoading, data, error } = trpc.useQuery([
    "survey.getSurveyResponses",
    { surveyId },
  ])

  const [showText, setShowText] = useState<boolean>(true)

  if (error || !data) {
    return <ErrorPage>Response Error {error?.message}</ErrorPage>
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center text-xd-primary-black">
          <span className="text-lg material-symbols-outlined text-xd-secondary-black-rgb">
            group
          </span>
          <div className="pl-2 tracking-wider font-medium">Responses</div>
        </div>

        <div className="flex justify-center rounded-full">
          <Switch
            checked={showText}
            onChange={setShowText}
            className={"rounded-full"}
          >
            <div
              className={clsx(
                "mt-4 md:mt-[unset] text-sm flex-shrink flex items-center bg-white ring-1 ring-xd-primary-purple-700/20 rounded-full relative",
                "transition-all after:content-[''] after:absolute after:w-[100px] after:rounded-full after:top-0 after-bottom:0 after:h-full after:bg-xd-primary-purple-700",
                {
                  "after:translate-x-full": !showText,
                  "after:translate-x-0": showText,
                }
              )}
            >
              <span
                className={clsx(
                  "text-xs button button-sm px-2 py-1 rounded-full min-w-[100px] z-[1]",
                  {
                    "text-white": showText,
                  }
                )}
              >
                Text
              </span>
              <span
                className={clsx(
                  "text-xs button button-sm px-2 py-1 rounded-full min-w-[100px] z-[1]",
                  {
                    "text-white": !showText,
                  }
                )}
              >
                Numeric
              </span>
            </div>
          </Switch>
        </div>
      </div>

      <div className="relative overflow-auto w-full max-h-[calc(100vh_-_5rem)]  border border-xd-neutral-400">
        {isLoading ? (
          <LoadingUI />
        ) : (
          <table className="border-collapse table-auto w-full text-xs md:text-sm text-left">
            <thead className="sticky top-0 bg-xd-neutral-400">
              <tr>
                <th
                  scope="col"
                  className="border-x border-b border-xd-neutral-400 bg-xd-neutral-200 text-xd-primary-black py-2 px-4 font-medium"
                >
                  <span>Submitted date</span>
                </th>
                <th
                  scope="col"
                  className="border-x border-b border-xd-neutral-400 bg-xd-neutral-200 text-xd-primary-black py-2 px-4 font-medium"
                >
                  <span>Responder ID</span>
                </th>
                {data?.questions.map((question, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="border-x border-b border-xd-neutral-400 bg-xd-neutral-200 text-xd-primary-black py-2 px-4 font-medium"
                  >
                    <span>{showText ? question.title : `Q${index}`}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.responses.map((response, rIndex) => (
                <tr key={rIndex} className="bg-white">
                  <td className="py-2 px-4 border-x border-b border-xd-neutral-300 w-[unset] md:w-40">
                    <span className="">
                      {format(
                        new Date(response.createdAt),
                        "yyyy-MM-dd | hh:mm a"
                      )}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-x border-b border-xd-neutral-300 w-[unset] md:w-32">
                    <span className="">{response.id}</span>
                  </td>
                  {Object.keys(response.answers).map((a) => {
                    const answerText = response.answers[a].map(
                      (ans) => ans.answer.textValue
                    )
                    const answerNumeric = response.answers[a].map(
                      (ans) => ans.answer.numericValue
                    )
                    return (
                      <td
                        key={a}
                        className="py-2 px-4 border-x border-b border-xd-neutral-300"
                      >
                        {showText
                          ? answerText.join(", ")
                          : answerNumeric.join(", ")}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
