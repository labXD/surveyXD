import clsx from "clsx"
import { NextPage } from "next"
import Head from "next/head"

import data from "../responseData.json"
const ResponsePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Response - surveyXD</title>
      </Head>
      <main className="p-4 space-y-4 lg:max-w-7xl lg:mx-auto">
        <div className="bg-white ring-1 ring-neutral-300 space-y-2 px-4 py-2 rounded">
          <h1 className="text-lg text-xd-text-primary-black font-bold">
            {data.surveyTitle}
          </h1>
          <div className="text-xd-danger-700 text-sm">
            <span className="text-xs material-symbols-rounded">emergency</span>
            <span className="">Required</span>
          </div>
        </div>
        <form className="space-y-4">
          {data.surveyQuestions.map((question, questionIndex) => (
            <fieldset
              key={questionIndex}
              className={clsx(
                "xd-card xd-card-border-l xd-card-focus ring-neutral-300 text-sm text-xd-text-primary-black"
              )}
            >
              <span className="pr-4 text-xd-text-primary-black font-medium">
                {question.questionTitle}
                {question?.questionRequired && (
                  <span className="text-xs text-xd-danger-700 material-symbols-rounded">
                    emergency
                  </span>
                )}
              </span>
              <div className="space-y-4 pt-6 flex flex-col">
                {question.options.map((option, optIndex) => (
                  <label
                    key={optIndex}
                    className="relative cursor-pointer inline-flex"
                  >
                    <span className="absolute left-0 top-[1px] flex">
                      <input
                        type={
                          question.questionType === "multiple"
                            ? "checkbox"
                            : "radio"
                        }
                        id={`question-${questionIndex}-option-${optIndex}`}
                        name={`question-${questionIndex}`}
                        value={option.text}
                      />
                    </span>
                    <span className="pl-6">{option.text}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <div className="flex justify-between">
            <button type="submit" className="xd-button">
              Submit
            </button>
            <button
              type="submit"
              className="xd-button-secondary-light text-xd-primary-700"
            >
              Clear form
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default ResponsePage
