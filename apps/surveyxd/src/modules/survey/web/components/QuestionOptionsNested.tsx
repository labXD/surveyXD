import clsx from "clsx"
import { FC } from "react"
import { Control, useFieldArray, UseFormRegister } from "react-hook-form"

import { NewSurveyPageNestedInterface } from "../types"
import { QuestionType } from "./Forms"

type QuestionOptionsNestedProps = {
  nestedIndex: number
  control: Control<NewSurveyPageNestedInterface, any>
  register: UseFormRegister<NewSurveyPageNestedInterface>
  errors: any
}
export const QuestionOptionsNested: FC<QuestionOptionsNestedProps> = ({
  nestedIndex,
  control,
  register,
  errors,
}) => {
  const {
    fields: optionFields,
    append: optionAppend,
    remove: optionRemove,
  } = useFieldArray({
    name: `surveyQuestions.${nestedIndex}.options`,
    control,
  })

  return (
    <>
      {optionFields.map((field, index) => {
        return (
          <>
            <QuestionType
              key={field.id}
              remove={() => {
                optionFields.length !== 1 && optionRemove(index)
              }}
            >
              <input
                key={field.id}
                type="text"
                placeholder="Option text"
                {...register(
                  `surveyQuestions.${nestedIndex}.options.${index}.text` as const,
                  {
                    required: true,
                  }
                )}
                className={clsx("w-full text-sm")}
              />
            </QuestionType>
            {errors && errors[index] ? errors[index].text?.message : null}
          </>
        )
      })}
      <button
        type="button"
        onClick={() =>
          optionAppend({
            text: "",
          })
        }
        className="xd-button-ghost xd-button-sm"
      >
        <span className="text-sm material-symbols-rounded">add</span>
        Add option
      </button>
    </>
  )
}
