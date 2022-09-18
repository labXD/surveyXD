import { createContext, FC, ReactNode, useContext, useState } from "react"

import { QuestionType } from "@/prisma"

import { QuestionTypeOptions } from "../types"

interface QuestionProviderInterface {
  children: ReactNode
}

interface QTCxtInterface {
  type: QuestionTypeOptions
  toggle: () => void
}

export const QuestionProviderClx = createContext<QTCxtInterface>({
  type: QuestionType.SINGLE_CHOICE,
  toggle: () => {},
})

export const QuestionProvider: FC<QuestionProviderInterface> = ({
  children,
}) => {
  const [questionType, setQuestionType] = useState<QuestionTypeOptions>(
    QuestionType.SINGLE_CHOICE
  )

  const toggleQuestionType = () => {
    setQuestionType((prev) =>
      prev === QuestionType.SINGLE_CHOICE
        ? QuestionType.MULTIPLE_CHOICE
        : QuestionType.SINGLE_CHOICE
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
