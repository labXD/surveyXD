import { createContext, FC, ReactNode, useContext, useState } from "react"

import { QuestionTypeOptions } from "../types"

interface QuestionProviderInterface {
  children: ReactNode
}

interface QTCxtInterface {
  type: QuestionTypeOptions
  toggle: () => void
}

export const QuestionProviderClx = createContext<QTCxtInterface>({
  type: "SINGLE_CHOICE",
  toggle: () => {},
})

export const QuestionProvider: FC<QuestionProviderInterface> = ({
  children,
}) => {
  const [questionType, setQuestionType] =
    useState<QuestionTypeOptions>("SINGLE_CHOICE")

  const toggleQuestionType = () => {
    setQuestionType((prev) =>
      prev === "SINGLE_CHOICE" ? "MULTIPLE_CHOICE" : "SINGLE_CHOICE"
    )
  }

  return (
    <QuestionProviderClx.Provider
      value={{ type: questionType, toggle: toggleQuestionType }}
    >
      {children}
    </QuestionProviderClx.Provider>
  )
}

export const useQuestionState = () => {
  const { type, toggle } = useContext(QuestionProviderClx)
  return { type, toggle }
}
