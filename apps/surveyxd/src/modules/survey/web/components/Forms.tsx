import clsx from "clsx"
import React, { FC, ReactNode } from "react"

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  cls?: string
  inputCls?: string
}
export const TextInput: FC<TextInputProps> = ({ cls, inputCls, ...props }) => {
  return (
    <div
      className={clsx(
        cls,
        "flex items-baseline justify-between border-b border-b-neutral-300"
      )}
    >
      <input
        {...props}
        type="text"
        className={clsx(inputCls, "w-full text-sm")}
      />
    </div>
  )
}

export type QuestionTypeOptions = "single" | "multiple"
export interface QuestionTypeProps {
  type?: QuestionTypeOptions
  children: ReactNode
  remove?: () => void
}

export const QuestionType: FC<QuestionTypeProps> = ({
  type = "single",
  children,
  remove,
  ...otherProps
}) => {
  return (
    <div className="flex items-center justify-between" {...otherProps}>
      <div className="flex items-center space-x-2 w-full">
        <span className="text-lg material-symbols-rounded text-xd-text-primary/80">
          {type === "single" ? "circle" : "check_box_outline_blank"}
        </span>
        <div
          className={clsx(
            "w-full",
            "relative flex items-baseline justify-between border-b border-b-neutral-300"
          )}
        >
          {children}
        </div>
      </div>
      <button onClick={remove}>
        <span
          className={clsx(
            "material-symbols-rounded text-xd-text-primary/[.65]"
          )}
        >
          close
        </span>
      </button>
    </div>
  )
}
