import clsx from "clsx"
import { format } from "date-fns"
import { FC } from "react"

import { trpc } from "@/trpc/web"

import { SurveyIdInterface } from "../types"

export const SurveyTicker: FC<SurveyIdInterface> = ({ surveyId }) => {
  const { data: surveyData } = trpc.useQuery(["survey.getSurvey", { surveyId }])

  const { data: userData } = trpc.useQuery(["user.getSurveys"])
  const survey = userData?.find((survey) => survey.id === surveyId)

  if (!surveyData) return null

  return (
    <div
      className={clsx("ring-1 ring-inset", "text-xd-primary-black", {
        "bg-xd-success-800/[0.05] ring-xd-success-800":
          survey?.publishStatus === "PUBLISHED",
        "bg-xd-danger-700/[0.05] ring-xd-danger-800":
          survey?.publishStatus !== "PUBLISHED",
      })}
    >
      <div className="page-max-xl flex flex-col md:flex-row px-4 items-center justify-between py-4 md:py-1 text-sm space-x-0 space-y-2 md:space-y-0 md:space-x-1">
        <div
          className={clsx(
            "flex items-center space-x-2 px-4 py-1 leading-0 rounded-full",
            {
              "text-xd-success-800": survey?.publishStatus === "PUBLISHED",
              "text-xd-danger-700": survey?.publishStatus === "COMPLETED",
            }
          )}
          title="Status"
        >
          <span className={clsx("text-base material-symbols-sharp")}>
            circle
          </span>
          <span className="font-medium">
            {(() => {
              switch (survey?.publishStatus) {
                case "PUBLISHED":
                  return "Published"
                case "COMPLETED":
                default:
                  return "Inactive"
              }
            })()}
          </span>
        </div>
        {/* Response Count */}
        <div className="flex items-center space-x-2" title="Response count">
          <span className="text-lg material-symbols-outlined">group</span>
          <span>{survey?.responseCount}</span>
        </div>
        <div className="flex items-center space-x-2" title="Published date">
          <span className="text-lg material-symbols-rounded">
            event_available
          </span>
          <span>
            {format(new Date(survey?.createdAt ?? ""), "yyyy-MM-dd | hh:mm a")}
          </span>
        </div>
        {/* Last update */}
        <div className="flex items-center space-x-2" title="Published date">
          <span className="text-lg material-symbols-rounded">
            published_with_changes
          </span>
          <span>
            {format(new Date(survey?.updatedAt ?? ""), "yyyy-MM-dd | hh:mm a")}
          </span>
        </div>
      </div>
    </div>
  )
}
