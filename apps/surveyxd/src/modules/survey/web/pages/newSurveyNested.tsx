import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useMemo, useState } from "react"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { BaseLayout, PageMetaTitle, SurveyDropdownMenu } from "@/meta/web"
import { QuestionType } from "@/prisma"
import { trpc } from "@/trpc/web"

import {
  FormInputError,
  QuestionOptionsNested,
  QuestionTypeDropdown,
  RequiredToggle,
  TextInputWithClose,
} from "../components"
import { QuestionProvider } from "../containers"
import { useActiveSurveyFromRoute } from "../hooks"
import { NewSurveyPageNestedInterface, SurveyDropdownMenuItem } from "../types"

const surveySchema: z.ZodType<NewSurveyPageNestedInterface> = z.lazy(() =>
  z.object({
    surveyTitle: z.string().min(1, { message: "Survey title is required" }),
    surveyQuestions: z
      .array(
        z.object({
          options: z
            .array(
              z.object({
                text: z.string().min(1, { message: "Please enter an option" }),
              })
            )
            .min(1, { message: "Must have at least one options" }),
          questionRequired: z.boolean(),
          questionTitle: z
            .string()
            .min(1, { message: "Please enter a question title" }),
          questionType: z.nativeEnum(QuestionType),
        })
      )
      .min(1, { message: "Must have at least one question" }),
  })
)

export const NewSurveyNestedPage: NextPage = () => {
  const [title, setTitle] = useState<string>("")
  const [minRequiredError, setMinRequiredError] = useState<boolean>(false)
  const { loading } = useActiveSurveyFromRoute()
  const router = useRouter()

  const defaultValues = useMemo(() => {
    return {
      surveyTitle: title,
      surveyQuestions: [
        {
          questionTitle: "",
          questionType: QuestionType.SINGLE_CHOICE,
          questionRequired: true,
          options: [{ text: "" }, { text: "" }],
        },
      ],
    }
  }, [title])

  const {
    register,
    control,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<NewSurveyPageNestedInterface>({
    resolver: zodResolver(surveySchema),
    defaultValues,
  })

  const {
    fields: questionFields,
    append: questionAppend,
    remove: questionRemove,
  } = useFieldArray({
    name: "surveyQuestions",
    control,
  })

  useEffect(() => {
    setFocus("surveyTitle")
  }, [setFocus])

  const createSurveyMutation = trpc.useMutation(["survey.createSurvey"])

  if (loading) {
    return <div className="p-8 animate-pulse">Loading...</div>
  }

  //   const TABS = ["Questions"]

  const menuItemArray: SurveyDropdownMenuItem[] = [
    {
      label: "Reset survey",
      icon: "restart_alt",
      onClick: () => {
        reset(defaultValues)
        setMinRequiredError(false)
      },
      buttonType: "reset",
    },
  ]

  const submitSurvey = async (e: FormEvent) => {
    e.preventDefault()
    await handleSubmit(onSubmit)(e)
  }

  const onSubmit: SubmitHandler<NewSurveyPageNestedInterface> = async (
    data
  ) => {
    console.log("data:\n", data)

    if (
      data.surveyQuestions.filter((v) => v.questionRequired === true).length ===
      0
    ) {
      setMinRequiredError(true)
      setTimeout(() => {
        setMinRequiredError(false)
      }, 2000)
      return
    }

    const res = await createSurveyMutation.mutateAsync({
      title: data.surveyTitle,
      questions: data.surveyQuestions.map((question) => ({
        type: question.questionType,
        title: question.questionTitle,
        required: question.questionRequired,
        options: question.options.map((option) => ({
          value: option.text,
        })),
      })),
    })

    router.replace(`/survey/${res.id}/success`)
  }

  return (
    <>
      <PageMetaTitle>Create survey</PageMetaTitle>
      <BaseLayout cls="bg-xd-primary-purple-100" disableTopNav disableFooter>
        <form onSubmit={submitSurvey}>
          <div className="md:px-4 page-max-xl">
            <section
              className={clsx("xd-card sticky top-0 z-10 ring", {
                "ring-xd-danger-700 ring-inset": minRequiredError,
              })}
            >
              <div className="flex items-center py-4 space-x-2">
                <div className="relative flex-1 border-b border-b-neutral-300 flex items-baseline justify-between">
                  <input
                    type="text"
                    placeholder="Enter a survey title"
                    aria-invalid={errors?.surveyTitle ? "true" : "false"}
                    className={clsx("w-full text-2xl font-bold")}
                    {...register("surveyTitle")}
                    value={title}
                    onChange={(e) => {
                      setTitle(e.currentTarget.value)
                    }}
                  />
                  {errors && errors?.surveyTitle && (
                    <FormInputError>
                      {errors.surveyTitle.message}
                    </FormInputError>
                  )}
                </div>
                <SurveyDropdownMenu data={menuItemArray} />
              </div>
              {minRequiredError && (
                <FormInputError>
                  At least 1 question must be set to &quot;Required&quot;.
                </FormInputError>
              )}
            </section>
            <div className="pt-6 space-y-4 focus-visible:outline-none">
              {questionFields.map((field, index) => (
                <div
                  key={field.id}
                  className="xd-card xd-card-border-l xd-card-focus"
                >
                  <TextInputWithClose
                    remove={() => {
                      questionFields.length > 1 && questionRemove(index)
                    }}
                  >
                    <input
                      placeholder="Question title"
                      type="text"
                      aria-invalid={
                        errors?.surveyQuestions?.[index]?.questionTitle
                          ? "true"
                          : "false"
                      }
                      className={clsx("w-full text-sm")}
                      {...register(
                        `surveyQuestions.${index}.questionTitle` as const
                      )}
                    />
                    {errors &&
                      errors?.surveyQuestions?.[index]?.questionTitle && (
                        <FormInputError>
                          {
                            errors?.surveyQuestions?.[index]?.questionTitle
                              ?.message
                          }
                        </FormInputError>
                      )}
                  </TextInputWithClose>
                  <QuestionProvider>
                    <div className="pt-4 flex justify-end">
                      {/* Question type */}
                      <QuestionTypeDropdown
                        name={`surveyQuestions.${index}.questionType` as const}
                        control={control}
                        rules={{ required: true }}
                        type={[
                          QuestionType.MULTIPLE_CHOICE,
                          QuestionType.SINGLE_CHOICE,
                        ]}
                      />
                    </div>
                    <aside className="pt-4 space-y-4">
                      <QuestionOptionsNested
                        nestedIndex={index}
                        control={control}
                        register={register}
                        errors={
                          errors.surveyQuestions &&
                          errors.surveyQuestions[index]?.options
                        }
                      />
                      {errors?.surveyQuestions &&
                        errors.surveyQuestions[index]?.options?.message}
                    </aside>
                  </QuestionProvider>
                  <div className="flex justify-end pt-8">
                    {/* Required toggle */}
                    <RequiredToggle
                      name={`surveyQuestions.${index}.questionRequired`}
                      control={control}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="pb-20 pt-6 flex justify-end">
              <button
                type="reset"
                onClick={() => {
                  reset(defaultValues)
                  setMinRequiredError(false)
                }}
                className="button button-link space-x-4"
              >
                <span className="material-symbols-rounded">restart_alt</span>
                <span>Reset</span>
              </button>
            </div>
          </div>
          <div className="fixed bottom-2 md:bottom-4 left-4 right-4 z-10 ">
            <div
              className={clsx(
                "bg-white flex justify-between rounded-full ring-2 ring-xd-primary-purple-700/20",
                "lg:max-w-sm lg:mx-auto"
              )}
            >
              <button
                type="button"
                onClick={() =>
                  questionAppend({
                    questionTitle: "",
                    questionType: QuestionType.SINGLE_CHOICE,
                    questionRequired: true,
                    options: [{ text: "" }, { text: "" }],
                  })
                }
                className={clsx("button button-icon-ghost")}
              >
                <span className="material-symbols-rounded">add</span>
              </button>

              <button
                type="submit"
                className={clsx("button button-icon-ghost", {
                  "animate-spin": isSubmitting,
                })}
                disabled={isSubmitting}
              >
                <span className="material-symbols-rounded">
                  {isSubmitting ? "autorenew" : "send"}
                </span>
              </button>
            </div>
          </div>
        </form>
      </BaseLayout>
    </>
  )
}
