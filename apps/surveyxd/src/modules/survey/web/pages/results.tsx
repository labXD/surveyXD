import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { NextPage } from "next"
import { useState } from "react"

import { BaseLayout, PageMetaTitle } from "@/meta/web"

type AnswerTypes = {
  id: number
  text: string
}
interface ResponseInterface {
  id: number
  text: string
  type: string
  isRequired: boolean
  answers: AnswerTypes[]
}

const SINGLE_RESPONSE: ResponseInterface[] = [
  {
    id: 1,
    text: "Is it hot?",
    type: "SINGLE_CHOICE",
    isRequired: true,
    answers: [
      {
        id: Math.floor(Math.random() * 2) + 1,
        text: "Use id value",
      },
    ],
  },
  {
    id: 2,
    text: "how hot?",
    type: "MULTIPLE_CHOICE",
    isRequired: true,
    answers: [
      {
        id: Math.floor(Math.random() * 5) + 1,
        text: "use id value ",
      },
      {
        id: Math.floor(Math.random() * 5) + 1,
        text: "use id value 2",
      },
    ],
  },
]

// const ALL_RESPONSES = {
//   id: 11,
//   text: "Heat check survey",
//   createdAt: new Date(),
//   responses: [SINGLE_RESPONSE, SINGLE_RESPONSE],
// }

export const ResultsPage: NextPage = () => {
  const [data] = useState(() => [...SINGLE_RESPONSE])
  const [sorting, setSorting] = useState<SortingState>([])
  const columnHelper = createColumnHelper<ResponseInterface>()

  const columns = [
    columnHelper.accessor("id", {
      header: () => <span>Question ID</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.text, {
      id: "text",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Question Text</span>,
    }),
    columnHelper.accessor("type", {
      header: () => <span>Type</span>,
      cell: (info) => {
        return info.getValue() === "SINGLE_CHOICE" ? "single" : "multiple"
      },
    }),
    columnHelper.accessor("isRequired", {
      header: () => <span>Required</span>,
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })

  return (
    <>
      <PageMetaTitle>Results</PageMetaTitle>
      <BaseLayout>
        <main className="flex flex-col items-center page-max-xl pt-4">
          <div className="relative overflow-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} scope="col" className="py-3 px-6">
                        {header.isPlaceholder ? null : (
                          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none flex items-center"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: (
                                <span className="text-xs material-symbols-rounded">
                                  expand_more
                                </span>
                              ),
                              desc: (
                                <span className="text-xs material-symbols-rounded">
                                  expand_less
                                </span>
                              ),
                            }[header.column.getIsSorted() as string] ?? (
                              <span className="text-xs material-symbols-rounded">
                                unfold_more
                              </span>
                            )}
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="py-4 px-6">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </BaseLayout>
    </>
  )
}
