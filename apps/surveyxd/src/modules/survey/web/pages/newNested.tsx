import { Tab } from "@headlessui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { XDDropdownMenu } from "@/meta/web"
import { trpc } from "@/trpc/web"
import {
  FormInputError,
  QuestionOptionsNested,
  QuestionTypeDropdown,
  RequiredToggle,
} from "../components"
import { QuestionProvider } from "../containers"
import { useActiveSurveyFromRoute } from "../hooks"
import { NewSurveyPageNestedInterface, SurveyDropdownMenuItem } from "../types"
import { QuestionType } from "@/prisma"

const defaultValues = {
  surveyTitle: "New Survey",
  surveyQuestions: [
    {
      questionTitle: "",
      questionType:   QuestionType.SINGLE_CHOICE,
      questionRequired: false,
      options: [{ text: "" }, { text: "" }],
    },
  ],
}

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

export const NewSurveyPageNested: NextPage = () => {
  const [title, setTitle] = useState("New Survey")
  const { loading } = useActiveSurveyFromRoute()
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
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

  const createSurveyMutation  = trpc.useMutation([
    "survey.createSurvey",
  ])

  if (loading) {
    return <div>Loading...</div>
  }

  // TODO: handle remaining statuses

  const TABS = ["Questions"]

  const menuItemArray: SurveyDropdownMenuItem[] = [
    {
      label: "Clear",
      icon: "restart_alt",
      onClick: () => reset(),
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

    const res = await createSurveyMutation.mutateAsync({
      title: data.surveyTitle,
      questions: data.surveyQuestions.map((question) => ({
        type: question.questionType,
        title: question.questionTitle,
        required: question.questionRequired,
        options: question.options.map((option) => ({
          value: option.text
        }))
      }))
    })

    router.replace(`/survey/${res.id}/success`)
  }

  return (
    <>
      <Head>
        <title>Create survey - surveyXD</title>
      </Head>
      <form onSubmit={submitSurvey}>
        <Tab.Group as={"div"} className="lg:max-w-7xl lg:mx-auto">
          <section className="pt-4 pb-3 bg-white shadow-md ring-1 ring-inset ring-neutral-200 sticky top-0 z-10">
            <div className="flex">
              <div className="relative flex-1 mx-4 border-b border-b-neutral-300 flex items-baseline justify-between">
                <input
                  type="text"
                  placeholder="Survey Title"
                  aria-invalid={errors?.surveyTitle ? "true" : "false"}
                  className={clsx("w-full text-2xl font-bold")}
                  {...register("surveyTitle")}
                  defaultValue={title}
                  onChange={(e) => {
                    setTitle(e.currentTarget.value)
                  }}
                />
                {errors && errors?.surveyTitle && (
                  <FormInputError>{errors.surveyTitle.message}</FormInputError>
                )}
              </div>
              <XDDropdownMenu data={menuItemArray} />
            </div>
            <Tab.List className="flex px-4 pt-2 space-x-6">
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
          <Tab.Panels className="mt-4 mb-20">
            <Tab.Panel as="div" className={"space-y-4 overflow-auto"}>
              {questionFields.map((field, index) => (
                <div
                  key={field.id}
                  className="xd-card xd-card-border-l xd-card-focus"
                >
                  <div className="flex items-center w-full">
                    <div
                      className={clsx(
                        "relative flex flex-1 items-baseline justify-between border-b border-b-neutral-300"
                      )}
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
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        questionFields.length > 1 && questionRemove(index)
                      }}
                    >
                      <span
                        className={clsx(
                          "material-symbols-rounded text-xd-text-primary/[.65]"
                        )}
                      >
                        close
                      </span>
                    </button>
                  </div>
                  <QuestionProvider>
                    <div className="pt-4 flex justify-end pr-6">
                      <QuestionTypeDropdown
                        name={`surveyQuestions.${index}.questionType` as const}
                        control={control}
                        rules={{ required: true }}
                        type={[QuestionType.MULTIPLE_CHOICE, QuestionType.SINGLE_CHOICE]}
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
                    {/* {requiredToggle} */}
                    <RequiredToggle
                      name={`surveyQuestions.${index}.questionRequired`}
                      control={control}
                    />
                  </div>
                </div>
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <div className="fixed bottom-0 left-4 right-4 z-10 ">
          <div className="bg-white flex justify-between p-4 rounded-t-lg drop-shadow-lg ring-2 ring-indigo-50        lg:max-w-3xl lg:mx-auto">
            <button
              type="button"
              onClick={() =>
                questionAppend({
                  questionTitle: "",
                  questionType: QuestionType.SINGLE_CHOICE,
                  questionRequired: false,
                  options: [{ text: "" }, { text: "" }],
                })
              }
            >
              <span className="material-symbols-rounded text-xd-text-primary/80">
                add
              </span>
            </button>
            <button type="submit">
              <span className="material-symbols-rounded text-xd-text-primary/80">
                send
              </span>
            </button>
            <button type="reset" onClick={() => reset()}>
              <span className="material-symbols-rounded text-xd-text-primary/80">
                restart_alt
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
