import clsx from "clsx"
import { NextPage } from "next"
import Link from "next/link"

import { BaseLayout, PageMetaTitle } from "../components"

export const DashboardPage: NextPage = () => {
  const DUMMY_SURVEY_DATA = [
    {
      id: 1,
      name: "Survey 1",
      date: "2020-01-01",
      status: "live",
      responses: 100,
    },
    {
      id: 2,
      name: "Survey 2",
      date: "2020-01-02",
      status: "live",
      responses: 200,
    },
    {
      id: 3,
      name: "Survey 3",
      date: "2020-01-03",
      status: "live",
      responses: 300,
    },
  ]

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
                {DUMMY_SURVEY_DATA.map((survey, index) => (
                  <tr
                    key={index}
                    className={clsx("bg-white even:bg-xd-neutral-100 border-b")}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <a className="button button-link">{survey.name}</a>
                    </th>
                    <td className="py-4 px-6 text-xd-success-700">
                      <div className="flex items-center bg-xd-success-700/10 px-3 py-1 rounded-full space-x-1">
                        <span className="w-2 h-2 rounded-full bg-xd-success-700" />
                        <span>{survey.status}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-700 dark:text-gray-400">
                        {survey.date}
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
                        <a className="button button-link">
                          <span className="material-symbols-rounded">link</span>
                        </a>
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
