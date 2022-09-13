export type SurveyQuestionTypes = {
  questionTitle: string
  //   questionDescription?: string
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
