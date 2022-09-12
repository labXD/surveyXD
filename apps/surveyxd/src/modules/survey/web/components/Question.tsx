import clsx from "clsx"
import { FC } from "react"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"

import { QuestionType } from "./Forms"
import { QuestionTypeDropdown } from "./QuestionTypeDropdown"
import { RequiredToggle } from "./RequiredToggle"

export type FormValues = {
  questionTitle: string
  questionType: string
  questionRequired?: boolean
  options: {
    text: string
  }[]
}

export const Question: FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      options: [{ text: "" }],
      questionRequired: false,
    },
    mode: "onBlur",
  })

  const {
    fields: optionFields,
    append: optionAppend,
    remove: optionRemove,
  } = useFieldArray({
    name: "options",
    control,
  })

  const onSubmit: SubmitHandler<FormValues> = (data) =>
    console.log("data:\n", data)

  return (
    <form
      className="xd-card xd-card-border-l xd-card-focus"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={clsx(
          "relative flex items-baseline justify-between border-b border-b-neutral-300"
        )}
      >
        <input
          placeholder="Question title"
          type="text"
          className={clsx("w-full text-sm")}
          {...register("questionTitle", { required: true })}
        />
        {errors?.questionTitle && (
          <span className="text-xs text-xd-danger-700 absolute bottom-0 left-0 translate-y-full">
            What is the question title?
          </span>
        )}
      </div>
      <div className="pt-3 flex justify-end">
        {/* <button className="xd-button-ghost xd-button-sm px-0">
          <span className="text-xs material-symbols-rounded">add</span>
          <span>Add description</span>
        </button> */}
        <QuestionTypeDropdown
          name="questionType"
          control={control}
          rules={{ required: true }}
          type={["single", "multiple"]}
          defaultValue="single"
        />
      </div>
      <section className="pt-3 space-y-4">
        {optionFields.map((field, index) => {
          return (
            <QuestionType key={field.id} remove={() => optionRemove(index)}>
              <input
                type="text"
                placeholder="Option text"
                {...register(`options.${index}.text` as const, {
                  required: true,
                })}
                className={clsx("w-full text-sm")}
              />
              {errors?.options?.[index]?.text && (
                <span className="text-xs text-xd-danger-700 absolute bottom-0 left-0 translate-y-full">
                  Add option or remove
                </span>
              )}
            </QuestionType>
          )
        })}
        <button
          type="button"
          onClick={() =>
            optionAppend({
              text: "",
            })
          }
          className="hidden last:block xd-button-ghost xd-button-sm"
        >
          <span className="text-sm material-symbols-rounded">add</span>
          Add option
        </button>
      </section>
      <div className="flex justify-between pt-8">
        <button type="submit" className="xd-button">
          Save
        </button>
        {/* {requiredToggle} */}
        <RequiredToggle name="questionRequired" control={control} />
      </div>
    </form>
  )
}
