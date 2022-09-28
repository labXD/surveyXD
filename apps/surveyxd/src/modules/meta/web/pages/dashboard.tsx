import clsx from "clsx"
import { format } from "date-fns"
import { NextPage } from "next"
import Link from "next/link"

import { SurveyPublishStatus } from "@/prisma"
import { trpc } from "@/trpc/web"

import { BaseLayout, PageMetaTitle } from "../components"

export const DashboardPage: NextPage = () => {
  const { isLoading, data, error, refetch } = trpc.useQuery(["user.getSurveys"])
  const updateSurveyStatusMutation = trpc.useMutation([
    "user.updateSurveyPublicationStatus",
  ])

  if (isLoading) {
    return <h1>loading ... </h1>
  }

  if (error || !data) {
    return <h1>error {error?.message}</h1>
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
      <PageMetaTitle>Dashboard</PageMetaTitle>
      <BaseLayout>
        <main className="flex flex-col items-center page-max-xl pt-4 space-y-6">
          <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Survey name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    status
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Date created
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Responses
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Survey link
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Responses
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((survey, index) => (
                  <tr
                    key={index}
                    className={clsx("bg-white even:bg-xd-neutral-100 border-b")}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <a className="button button-link">{survey.title}</a>
                    </th>
                    <td className="py-4 px-6 text-xd-success-700">
                      <div className="flex items-center bg-xd-success-700/10 px-3 py-1 rounded-full space-x-1">
                        <span className="w-2 h-2 rounded-full bg-xd-success-700" />
                        <span>{survey.publishStatus}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-700 dark:text-gray-400">
                        {format(new Date(survey.createdAt), "yyyy-MM-dd")}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-x-1 flex items-center">
                        <span className="material-symbols-rounded">group</span>
                        <span>{survey.responses}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        <Link href={`/survey/${survey.id}`}>
                          <a className="button button-link">
                            <span className="material-symbols-rounded">
                              link
                            </span>
                          </a>
                        </Link>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        <Link href="/survey/results">
                          <a className="button button-link">
                            <span className="material-symbols-rounded">
                              link
                            </span>
                          </a>
                        </Link>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        <button
                          onClick={() =>
                            toggleSurveyPublicationStatus(
                              survey.id,
                              survey.publishStatus
                            )
                          }
                        >
                          toggle
                        </button>
                      </div>
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
        </main>
      </BaseLayout>
    </>
  )
}
