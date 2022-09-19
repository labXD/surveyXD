import clsx from "clsx"
import React, { FC, ReactNode } from "react"

import { QuestionType as QType } from "@/prisma"

import { QuestionTypeOptions } from "../types"

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
        "flex items-baseline justify-between border-b border-b-xd-neutral-300"
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

interface TextInputWithCloseInterface {
  children: ReactNode
  remove: () => void
}
export const TextInputWithClose: FC<TextInputWithCloseInterface> = ({
  children,
  remove,
  ...otherProps
}) => {
  return (
    <div
      className="flex items-center justify-between space-x-2"
      {...otherProps}
    >
      <div
        className={clsx(
          "w-full",
          "relative flex items-baseline justify-between border-b border-b-xd-neutral-300"
        )}
      >
        {children}
      </div>
      <button
        type="button"
        onClick={remove}
        className="button-icon-ghost button-sm p-0"
      >
        <span className={clsx("material-symbols-rounded")}>close</span>
      </button>
    </div>
  )
}

export interface QuestionTypeProps {
  type: QuestionTypeOptions
  children: ReactNode
  readonly?: boolean
  remove?: () => void
}
export const QuestionType: FC<QuestionTypeProps> = ({
  type = QType.SINGLE_CHOICE,
  children,
  readonly,
  remove,
  ...otherProps
}) => {
  return (
    <div
      className="flex items-center justify-between space-x-2"
      {...otherProps}
    >
      <div className="flex items-center space-x-2 w-full">
        <span className="text-lg material-symbols-rounded text-xd-secondary-black-rgb">
          {type === QType.SINGLE_CHOICE ? "circle" : "check_box_outline_blank"}
        </span>
        <div
          className={clsx(
            "w-full",
            "relative flex items-baseline justify-between",
            { "border-b border-b-xd-neutral-300": !readonly }
          )}
        >
          {children}
        </div>
      </div>
      {!readonly && (
        <button
          type="button"
          onClick={remove}
          className="button-icon-ghost button-sm p-0"
        >
          <span className={clsx("material-symbols-rounded")}>close</span>
        </button>
      )}
    </div>
  )
}

interface FormInputInterface {
  cls?: string | Record<string, boolean>
  children: ReactNode
}
export const FormInputError: FC<FormInputInterface> = ({ cls, children }) => {
  return (
    <div
      className={clsx(
        cls,
        " text-xd-danger-700 text-sm absolute bottom-0 left-0 translate-y-full"
      )}
    >
      {children}
    </div>
  )
}
