import { Tab } from "@headlessui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { NextPage } from "next"
import Head from "next/head"
import { FormEvent, useState } from "react"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { XDDropdownMenu } from "@/meta/web"

import { QuestionTypeDropdown, RequiredToggle } from "../components"
import { QuestionOptionsNested } from "../components"
import { useActiveSurveyFromRoute } from "../hooks"

const defaultValues = {
  surveyTitle: "New Survey",
  surveyQuestions: [
    {
      questionTitle: "",
      questionType: "single",
      questionRequired: false,
      options: [{ text: "" }, { text: "" }],
    },
  ],
}

const surveySchema = z.object({
  surveyTitle: z.string().min(1),
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
        questionType: z.enum(["single", "multiple"]),
      })
    )
    .min(1, { message: "Must have at least one question" }),
})

type SurveyQuestionTypes = {
  questionTitle: string
  //   questionDescription?: string
  questionType: string
  questionRequired?: boolean
  options: {
    text: string
  }[]
}

interface NewSurveyPageNestedInterface {
  surveyTitle: string
  surveyQuestions: SurveyQuestionTypes[]
}
export const NewSurveyPageNested: NextPage = () => {
  const [title, setTitle] = useState("New Survey")
  const { loading } = useActiveSurveyFromRoute()

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

  if (loading) {
    return <div>Loading...</div>
  }

  // TODO: handle remaining statuses

  const TABS = ["Questions"]

  const menuItemArray = [
    {
      label: "Dashboard",
      icon: "corporate_fare",
    },
  ]

  const submitSurvey = async (e: FormEvent) => {
    e.preventDefault()
    await handleSubmit(onSubmit)(e)
  }

  const onSubmit: SubmitHandler<NewSurveyPageNestedInterface> = (data) => {
    console.log("data:\n", data)
  }

  return (
    <>
      <Head>
        <title>Create survey - surveyXD</title>
      </Head>
      <form onSubmit={submitSurvey}>
        <Tab.Group as={"div"} className="lg:max-w-7xl lg:mx-auto">
          <section className="pt-4 pb-3 bg-white shadow-md ring-1 ring-inset ring-neutral-200 sticky top-0 z-10">
            <div className="relative mx-4 border-b border-b-neutral-300 flex items-baseline justify-between">
              <input
                type="text"
                placeholder="Survey Title"
                className={clsx("w-full text-2xl font-bold")}
                {...register("surveyTitle", { required: true })}
                defaultValue={title}
                onChange={(e) => {
                  setTitle(e.currentTarget.value)
                }}
              />
              <XDDropdownMenu data={menuItemArray} />
            </div>
            {errors && errors.surveyTitle ? errors.surveyTitle.message : null}
            <Tab.List className="flex px-4 space-x-6">
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
          <Tab.Panels className="mt-4">
            <Tab.Panel as="div" className={"space-y-4 overflow-auto pb-20"}>
              {questionFields.map((field, index) => (
                <div
                  key={field.id}
                  className="xd-card xd-card-border-l xd-card-focus"
                >
                  <div className="flex items-center space-x-2 w-full">
                    <div
                      className={clsx(
                        "relative flex flex-1 items-baseline justify-between border-b border-b-neutral-300"
                      )}
                    >
                      <input
                        placeholder="Question title"
                        type="text"
                        className={clsx("w-full text-sm")}
                        {...register(
                          `surveyQuestions.${index}.questionTitle` as const,
                          {
                            required: true,
                          }
                        )}
                      />
                    </div>
                    <button onClick={() => questionRemove(index)}>
                      <span
                        className={clsx(
                          "material-symbols-rounded text-xd-text-primary/[.65]"
                        )}
                      >
                        close
                      </span>
                    </button>
                  </div>
                  {errors.surveyQuestions
                    ? errors.surveyQuestions[index]?.questionTitle?.message
                    : null}
                  {/* <div className="flex items-end space-x-2 w-full">
                    <label className={clsx("relative flex flex-col flex-1")}>
                      <div className="pb-1 mt-4">
                        <span className="text-xs tracking-wider uppercase text-xd-text-primary/[.65]">
                          Description
                        </span>
                      </div>
                      <input
                        placeholder="Question description"
                        type="text"
                        className={clsx("w-full text-sm bg-xd-text-primary/10")}
                        {...register(
                          `surveyQuestions.${index}.questionDescription` as const
                        )}
                      />
                    </label>
                    <button
                      onClick={() =>
                        resetField(
                          `surveyQuestions.${index}.questionDescription`
                        )
                      }
                    >
                      <span
                        className={clsx(
                          "material-symbols-rounded text-xd-text-primary/[.65]"
                        )}
                      >
                        close
                      </span>
                    </button>
                  </div> */}
                  <div className="pt-3 flex justify-between">
                    {/* <button className="xd-button-ghost xd-button-sm px-0">
                      <span className="text-xs material-symbols-rounded">
                        add
                      </span>
                      <span>Add description</span>
                    </button> */}
                    <QuestionTypeDropdown
                      name={`surveyQuestions.${index}.questionType` as const}
                      control={control}
                      rules={{ required: true }}
                      type={["single", "multiple"]}
                      defaultValue={title}
                    />
                  </div>
                  <aside className="pt-3 space-y-4">
                    <QuestionOptionsNested
                      nestedIndex={index}
                      control={control}
                      register={register}
                      errors={
                        errors.surveyQuestions
                          ? errors.surveyQuestions[index]?.options
                          : "No errors"
                      }
                    />
                    {errors.surveyQuestions
                      ? errors.surveyQuestions[index]?.options?.message
                      : null}
                  </aside>
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
                  questionType: "single",
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
