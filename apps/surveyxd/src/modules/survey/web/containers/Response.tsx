import clsx from "clsx"
import Head from "next/head"
import { useRouter } from "next/router"
import { FC, FormEvent } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import { QuestionType } from "@/prisma"
import { trpc } from "@/trpc/web"

interface ResponseInterface {
  question: Array<string | null | Array<string>>
}

export interface ResponseProps {
  surveyId: string
}

export const Response: FC<ResponseProps> = ({ surveyId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResponseInterface>()

  const { data, isLoading, error } = trpc.useQuery([
    "survey.getSurvey",
    { surveyId },
  ])

  const submitResMutation = trpc.useMutation("survey.submitResponse")

  const router = useRouter()

  const submitResponse = async (e: FormEvent) => {
    e.preventDefault()
    await handleSubmit(onSubmit)(e)
  }

  const onSubmit: SubmitHandler<ResponseInterface> = async (formData) => {
    if (!data) {
      return
    }

    const encrichFormData = formData.question
      .filter((q) => {
        if (!q) {
          return false
        }

        if (Array.isArray(q) && q.length === 0) {
          return false
        }

        return true
      })
      .map((res) => {
        const q = data?.questions.find((q) =>
          q.options.find((o) =>
            Array.isArray(res) ? o.id === res[0] : o.id === res
          )
        )

        if (!q) {
          return
        }

        return {
          resId: res,
          questionId: q.id,
        }
      })
      .filter((val) => !!val)

    await submitResMutation.mutateAsync({
      surveyId: data.id,
      responses: encrichFormData.map((dt) => ({
        questionId: dt?.questionId ?? "",
        responseIds: dt?.resId
          ? typeof dt?.resId === "string"
            ? [dt.resId]
            : dt.resId
          : [],
      })),
    })

    router.replace(`/survey/${surveyId}/vote/success`)
  }

  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>{error.message}</h1>
  }

  if (!data) {
    return <h1>Something went wrong</h1>
  }

  return (
    <>
      <Head>
        <title>Your Response - surveyXD</title>
      </Head>
      <main className="p-4 space-y-4 lg:max-w-7xl lg:mx-auto">
        <div className="bg-white ring-1 ring-neutral-300 space-y-2 px-4 py-2 rounded">
          <h1 className="text-lg text-xd-text-primary-black font-bold">
            {data.title}
          </h1>
          <div className="text-xd-danger-700 text-sm">
            <span className="text-xs material-symbols-rounded">emergency</span>
            <span className="">Required</span>
          </div>
        </div>
        <form className="space-y-4" onSubmit={submitResponse}>
          {data.questions.map((question, questionIndex) => (
            <div key={question.id}>
              <fieldset
                className={clsx(
                  `${
                    errors.question && errors.question[questionIndex]
                      ? "border-4 border-xd-danger-800 xd-card xd-card-focus"
                      : "xd-card xd-card-border-l xd-card-focus ring-neutral-300 text-sm text-xd-text-primary-black"
                  }`
                )}
                {...register(`question.${questionIndex}` as const, {
                  required: question.isRequired,
                })}
              >
                <span className="pr-4 text-xd-text-primary-back font-medium">
                  {question.title}
                  {question?.isRequired && (
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
                            question.questionType === QuestionType.SINGLE_CHOICE
                              ? "checkbox"
                              : "radio"
                          }
                          id={`question-${question.id}-option-${option.id}`}
                          value={option.id}
                          {...register(`question.${questionIndex}` as const)}
                        />
                      </span>
                      <span className="pl-6">{option.textValue}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              {errors.question && errors.question[questionIndex] && (
                <div className="text-xd-danger-800 text-sm mt-4">
                  Please make a selection to submit this form
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-between">
            <button type="submit" className="xd-button">
              Submit
            </button>
            <button
              type="reset"
              className="xd-button-secondary-light text-xd-primary-700"
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
