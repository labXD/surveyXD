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
        const q = data?.questions.find((q: { options: any[] }) =>
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

    router.replace(`/survey/${surveyId}/response/success`)
  }

  if (isLoading) {
    return <div className="p-4">...Loading</div>
  }

  if (error) {
    return <div className="p-4">{error.message}</div>
  }

  if (!data) {
    return <div className="p-4">Something went wrong</div>
  }

  return (
    <>
      <Head>
        <title>{data.title?.slice(0, 10)} - surveyXD</title>
      </Head>
      <main className="p-4 space-y-4 lg:max-w-7xl lg:mx-auto">
        <div className="bg-white ring-1 ring-xd-primary-purple-700/10 space-y-2 px-4 py-2 rounded">
          <h1 className="text-lg text-xd-primary-black font-bold">
            {data.title}
          </h1>
        </div>
        <form className="space-y-6" onSubmit={submitResponse}>
          {data.questions.map((question, questionIndex) => (
            <>
              <fieldset
                key={question.id}
                className={clsx(
                  "relative xd-card ring-xd-primary-purple-700/10",
                  {
                    "ring-2 ring-inset ring-xd-danger-800":
                      errors.question && errors.question[questionIndex],
                  }
                )}
                {...register(`question.${questionIndex}` as const, {
                  required: question.isRequired,
                })}
              >
                <span className="pr-4 text-xd-primary-back font-medium">
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
                              ? "radio"
                              : "checkbox"
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
