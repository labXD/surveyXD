import clsx from "clsx"
import { motion } from "framer-motion"
import { FC, useState } from "react"

import { ErrorPage, LoadingUI } from "@/meta/web"
import { trpc } from "@/trpc/web"

import { SurveyIdInterface } from "../types"

export const SurveyResultsAbstract: FC<SurveyIdInterface> = ({ surveyId }) => {
  const [collapse, setCollapse] = useState(true)

  const { isLoading, data, error } = trpc.useQuery([
    "survey.getSurvey",
    { surveyId },
  ])

  if (isLoading) {
    return <LoadingUI />
  }

  if (error || !data) {
    return <ErrorPage>Survey Error {error?.message}</ErrorPage>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xd-primary-black">
          <span className="text-xl material-symbols-outlined text-xd-secondary-black-rgb">
            document_scanner
          </span>
          <div className="text-lg tracking-wider font-medium">
            {data?.title}
          </div>
        </div>
        <div>
          <button className="button button-icon-ghost button-sm space-x-2 text-xd-primary-purple-700">
            <span className="material-symbols-rounded">
              download_for_offline
            </span>
            <span className="hidden md:block">Export data</span>
          </button>
        </div>
      </div>

      <div className="text-sm">
        <button
          className={clsx("button w-full justify-between button-sm", {
            "bg-xd-primary-purple-700 text-white": !collapse,
            "bg-white ring-1 ring-inset ring-xd-primary-purple-700/30 hover:ring-xd-primary-purple-700":
              collapse,
          })}
          onClick={() => setCollapse(!collapse)}
        >
          <span>Survey Breakdown</span>
          <motion.span
            className="material-symbols-outlined"
            animate={collapse ? { rotate: 0 } : { rotate: 180 }}
          >
            expand_more
          </motion.span>
        </button>
        <motion.div
          className={clsx("overflow-hidden")}
          initial={{ height: 0 }}
          animate={collapse ? { height: 0 } : { height: "auto" }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-4 px-1 md:px-4">
            <div className="xd-card ring-xd-primary-purple-700 divide-y-2 divide-xd-neutral-300 space-y-4">
              {data.questions.map((q, qIndex) => (
                <div
                  className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xd-secondary-black-rgb first:pt-0 pt-4"
                  key={qIndex}
                >
                  <div className="col-start-1 col-span-2 pb-2">
                    <span className="bg-xd-neutral-700 text-white py-1 px-4 rounded-full">
                      Question {qIndex}
                    </span>
                  </div>
                  <span className="font-medium pl-2 justify-self-end">
                    Title{`:`}
                  </span>
                  <span>{q.title}</span>
                  <span className="font-medium pl-2 justify-self-end">
                    Required{`:`}
                  </span>
                  <span>{q.isRequired ? "Yes" : "No"}</span>
                  <span className="font-medium pl-2 justify-self-end">
                    Type{`:`}
                  </span>
                  <span>
                    {q.questionType.replaceAll("_", " ").toLowerCase()}
                  </span>
                  <span className="font-semibold pl-2 justify-self-end">
                    Option{q.options.length > 1 && "s"}
                  </span>
                  {q.options.map((o, oIndex) => (
                    <>
                      <span
                        key={oIndex}
                        className="col-start-1 justify-self-end font-medium min-w-[1rem] text-center"
                      >
                        {o.numericValue}
                        {`:`}
                      </span>
                      <span>{o.textValue}</span>
                    </>
                  ))}
                </div>
              ))}
              <div className="space-x-2 pt-4 text-xd-secondary-black-rgb">
                <span className="font-medium">TOTAL QUESTIONS:</span>
                <span>{data.questions.length}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
