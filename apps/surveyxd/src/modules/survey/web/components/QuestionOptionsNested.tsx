import clsx from "clsx"
import { FC } from "react"
import {
  Control,
  FieldError,
  FieldErrorsImpl,
  Merge,
  useFieldArray,
  UseFormRegister,
} from "react-hook-form"

import { useQuestionState } from "../containers"
import { NewSurveyPageNestedInterface } from "../types"
import { FormInputError, QuestionType } from "./Forms"

type QuestionOptionsNestedProps = {
  nestedIndex: number
  control: Control<NewSurveyPageNestedInterface, any>
  register: UseFormRegister<NewSurveyPageNestedInterface>
  errors:
    | Merge<
        FieldError,
        (Merge<FieldError, FieldErrorsImpl<{ text: string }>> | undefined)[]
      >
    | undefined
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
    name: `surveyQuestions.${nestedIndex}.options` as "surveyQuestions.0.options",
    control,
  })

  const { type } = useQuestionState()

  console.log("mytype", type)
  return (
    <>
      {optionFields.map((field, index) => {
        return (
          <>
            <QuestionType
              key={field.id}
              type={type}
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
              {errors && errors[index] && (
                <FormInputError>{errors[index]?.text?.message}</FormInputError>
              )}
            </QuestionType>
          </>
        )
      })}
      <QuestionType type={type} readonly>
        {/* <span className="text-blue-700 border border-transparent px-3 py-2">
          Add option
        </span> */}
        <button
          type="button"
          onClick={() =>
            optionAppend({
              text: "",
            })
          }
          className="xd-button-ghost button-sm font-normal group"
        >
          <span className="text-blue-700 group-hover:drop-shadow">
            Add option
          </span>
        </button>
      </QuestionType>
    </>
  )
}
