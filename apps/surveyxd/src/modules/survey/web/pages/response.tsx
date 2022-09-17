import clsx from "clsx"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { FormEvent } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import data from "../responseData.json"
export const ResponsePage: NextPage = () => {
  const router = useRouter()
  interface ResponseInterface {
    question: Array<string | null | boolean | Array<string>>
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResponseInterface>()

  const submitResponse = async (e: FormEvent) => {
    e.preventDefault()
    await handleSubmit(onSubmit)(e)
  }

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("data:\n", data)
    router.replace("/survey/09222022/sent")
  }

  return (
    <>
      <Head>
        <title>Your Response - surveyXD</title>
      </Head>
      <main className="p-4 space-y-4 lg:max-w-7xl lg:mx-auto">
        <div className="bg-white ring-1 ring-xd-primary-purple-700/10 space-y-2 px-4 py-2 rounded">
          <h1 className="text-lg text-xd-primary-black font-bold">
            {data.surveyTitle}
          </h1>
        </div>
        <form className="space-y-6" onSubmit={submitResponse}>
          {data.surveyQuestions.map((question, questionIndex) => (
            <>
              <fieldset
                key={questionIndex}
                className={clsx(
                  "relative xd-card ring-xd-primary-purple-700/10",
                  {
                    "ring-2 ring-inset ring-xd-danger-800":
                      errors.question && errors.question[questionIndex],
                  }
                )}
                {...register(`question.${questionIndex}` as const, {
                  required: question.questionRequired,
                })}
              >
                <span className="pr-4 text-xd-primary-black font-medium">
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
                            question.questionType === "MULTIPLE_CHOICE"
                              ? "checkbox"
                              : "radio"
                          }
                          id={`question-${questionIndex}-option-${optIndex}`}
                          value={option.text}
                          {...register(`question.${questionIndex}` as const)}
                        />
                      </span>
                      <span className="pl-6">{option.text}</span>
                    </label>
                  ))}
                </div>
                {errors.question && errors.question[questionIndex] && (
                  <div className="absolute bottom-0 left-0 translate-y-full text-xd-danger-800 text-sm">
                    Please make a selection to submit this form
                  </div>
                )}
              </fieldset>
            </>
          ))}

          <div className="flex justify-between">
            <button type="submit" className="button-primary min-w-[8rem]">
              Submit
            </button>
            <button
              type="reset"
              className="button-outline text-xd-primary-purple-700 min-w-[8rem]"
              onClick={() => reset()}
            >
              Clear form
            </button>
          </div>
        </form>
      </main>
    </>
  )
}
