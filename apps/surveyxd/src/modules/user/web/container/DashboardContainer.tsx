import clsx from "clsx"
import { format } from "date-fns"
import Link from "next/link"
import { FC } from "react"

import { ErrorPage, LoadingUI } from "@/meta/web"
import { SurveyPublishStatus } from "@/prisma"
import { trpc } from "@/trpc/web"

const HEADER = [
  {
    label: "survey name",
    type: "string",
  },
  {
    label: "status",
    type: "string",
  },
  {
    label: "event_available",
    type: "icon",
  },
  {
    label: "group",
    type: "icon",
  },
  {
    label: "survey link",
    type: "string",
  },
  {
    label: "results",
    type: "string",
  },
  {
    label: "Activate",
    type: "string",
  },
]

export const DashboardContainer: FC = () => {
  const { isLoading, data, error, refetch } = trpc.useQuery(["user.getSurveys"])
  const updateSurveyStatusMutation = trpc.useMutation([
    "user.updateSurveyPublicationStatus",
  ])

  if (isLoading) {
    return <LoadingUI center />
  }

  if (error || !data) {
    return <ErrorPage>Error {error?.message}</ErrorPage>
  }

  const toggleSurveyPublicationStatus = async (
    surveyId: string,
    prevPubStatus: SurveyPublishStatus
  ) => {
    await updateSurveyStatusMutation.mutateAsync({
      surveyId,
      status:
        prevPubStatus === SurveyPublishStatus.PUBLISHED
          ? SurveyPublishStatus.COMPLETED
          : SurveyPublishStatus.PUBLISHED,
    })

    // TODO: clean up with more granular statue update
    refetch()
  }

  return (
    <>
      <div className="relative overflow-auto w-full mt-6 max-h-[calc(100vh_-_5rem)]  border border-xd-neutral-400">
        <table className="border-collapse table-auto w-full text-xs md:text-sm text-left">
          <thead className="sticky top-0 bg-xd-neutral-400">
            <tr>
              {HEADER.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className={clsx(
                    "border-x border-b border-xd-neutral-400 bg-xd-neutral-200 text-xd-primary-black py-2 px-4 font-medium",
                    {
                      "text-center": !header.label.includes("name"),
                    }
                  )}
                >
                  {header.type === "icon" ? (
                    <span className="material-symbols-rounded">
                      {header.label}
                    </span>
                  ) : (
                    <span className="uppercase">{header.label}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((survey, index) => (
              <tr key={index} className="bg-white">
                <td className="py-2 px-4 border-x border-b border-xd-neutral-300">
                  {survey.title}
                </td>
                <td
                  className={clsx(
                    "py-2 px-4 border-x border-b border-xd-neutral-300 w-[unset] md:w-[10rem]",
                    {
                      "text-xd-success-800":
                        survey.publishStatus === "PUBLISHED",
                      "text-xd-danger-800":
                        survey.publishStatus === "COMPLETED",
                    }
                  )}
                >
                  <div
                    className={clsx(
                      "inline-flex items-center px-3 py-1 rounded-full space-x-1",
                      {
                        "bg-xd-success-800/[.15]":
                          survey.publishStatus === "PUBLISHED",
                        "bg-xd-danger-800/[.15]":
                          survey.publishStatus === "COMPLETED",
                      }
                    )}
                  >
                    <span
                      className={clsx("w-2 h-2 rounded-full", {
                        "bg-xd-success-800":
                          survey.publishStatus === "PUBLISHED",
                        "bg-xd-danger-700":
                          survey.publishStatus === "COMPLETED",
                      })}
                    />
                    <span>
                      {(() => {
                        switch (survey.publishStatus) {
                          case "PUBLISHED":
                            return "Published"
                          case "COMPLETED":
                          default:
                            return "Inactive"
                        }
                      })()}
                    </span>
                  </div>
                </td>
                <td className="py-2 px-4 border-x border-b border-xd-neutral-300">
                  <span>
                    {format(new Date(survey.createdAt), "yyyy-MM-dd | hh:mm a")}
                  </span>
                </td>
                <td className="py-2 px-4 border-x border-b border-xd-neutral-300 text-center">
                  <span>
                    {survey.responseCount < 1 ? "-" : survey.responseCount}
                  </span>
                </td>
                <td
                  key={index}
                  className="py-2 px-4 border-x border-b border-xd-neutral-300 text-center"
                >
                  <div className="inline-flex">
                    <Link href={`/survey/${survey.id}`}>
                      <a className="button button-link">
                        <span className="material-symbols-rounded">link</span>
                      </a>
                    </Link>
                  </div>
                </td>
                <td className="py-2 px-4 border-x border-b border-xd-neutral-300 text-center">
                  {survey.responseCount < 1 ? (
                    "-"
                  ) : (
                    <div className="inline-flex">
                      <Link href={`/survey/${survey.id}/results`}>
                        <a className="button button-link">
                          <span className="material-symbols-rounded">link</span>
                        </a>
                      </Link>
                    </div>
                  )}
                </td>
                <td className="py-2 px-4 border-x border-b border-xd-neutral-300 text-center">
                  <button
                    onClick={() =>
                      toggleSurveyPublicationStatus(
                        survey.id,
                        survey.publishStatus
                      )
                    }
                  >
                    <div className="flex items-center transition-all group cursor-pointer">
                      <div
                        className={clsx(
                          "relative h-4 w-7 cursor-pointer rounded-full transition-all",
                          {
                            "bg-xd-primary-purple-700":
                              survey.publishStatus === "PUBLISHED",
                            "bg-xd-neutral-500":
                              survey.publishStatus !== "PUBLISHED",
                          }
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={clsx(
                            "absolute left-[2px] top-[2px] h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition-all",
                            {
                              "translate-x-full":
                                survey.publishStatus === "PUBLISHED",
                              "translate-x-0":
                                survey.publishStatus !== "PUBLISHED",
                            }
                          )}
                        />
                      </div>
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link href="/survey/create">
          <button className="button space-x-2 button-primary">
            <span className="material-symbols-rounded">add</span>
            Create a new survey
          </button>
        </Link>
      </div>
    </>
  )
}
