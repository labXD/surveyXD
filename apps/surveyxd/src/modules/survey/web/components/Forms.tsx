import clsx from "clsx"
import React, { FC } from "react"

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  cls?: string
  inputCls?: string
  inline?: boolean
}
export const TextInput: FC<TextInputProps> = ({
  cls,
  inputCls,
  inline,
  ...props
}) => {
  return (
    <div
      className={clsx(cls, "border-b flex items-baseline justify-between", {
        "border-b-neutral-300": !inline,
        "border-b-transparent": inline,
      })}
    >
      <input
        {...props}
        className={clsx(
          inputCls,
          "w-full text-sm text-xd-text-primary placeholder:text-xd-text-primary/[.65]",
          { "pb-1": !inline, "p-1": inline }
        )}
      />
    </div>
  )
}

export type QuestionTypeOptions = "single" | "multiple"
export interface QuestionTypeProps {
  type?: QuestionTypeOptions
  value?: string
}
export const QuestionType: FC<QuestionTypeProps> = ({
  type = "single",
  value,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2 w-full">
        <span className="text-lg material-symbols-outlined text-xd-text-primary/80">
          {type === "single" ? "circle" : "check_box_outline_blank"}
        </span>
        <TextInput
          inputCls="placeholder:text-blue-500"
          value={value}
          placeholder="Add option"
          inline
          cls="w-full"
        />
      </div>
      <span
        className={clsx(
          "material-symbols-outlined text-xd-text-primary/[.65]",
          {
            hidden: !value,
          }
        )}
      >
        close
      </span>
    </div>
  )
}
