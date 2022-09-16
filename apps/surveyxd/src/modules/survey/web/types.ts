export type SurveyQuestionTypes = {
  questionTitle: string
  questionType: string
  questionRequired?: boolean
  options: {
    text: string
  }[]
}

export interface NewSurveyPageNestedInterface {
  surveyTitle: string
  surveyQuestions: SurveyQuestionTypes[]
}

// SurveyDropdownMenu
export type SurveyDropdownMenuItem = {
  label: string
  icon?: string
  onClick?: () => void
  buttonType?: "button" | "submit" | "reset"
}
export interface SurveyDropdownMenuInterface {
  data: SurveyDropdownMenuItem[]
}

// Forms
export type QuestionTypeOptions = "single" | "multiple"
