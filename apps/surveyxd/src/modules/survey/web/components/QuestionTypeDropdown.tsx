import { Listbox, Transition } from "@headlessui/react"
import clsx from "clsx"
import { Fragment } from "react"
import { FieldValues, useController, UseControllerProps } from "react-hook-form"

import { QuestionType } from "@/prisma"

import { useQuestionState } from "../containers"
import { QuestionTypeOptions } from "../types"

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

interface QuestionTypeDropdownInterface {
  type: QuestionTypeOptions[]
}

type QuestionTypeDropdownTypes<T extends FieldValues> =
  QuestionTypeDropdownInterface & UseControllerProps<T>

export const QuestionTypeDropdown = <T extends FieldValues>(
  props: QuestionTypeDropdownTypes<T>
) => {
  const { toggle } = useQuestionState()
  const {
    field: { value, onChange },
  } = useController(props)

  function _onChange(e: QuestionTypeOptions) {
    onChange(e)
    toggle()
  }

  const { type } = props
  return (
    <Listbox value={value} onChange={_onChange}>
      {({ open }) => (
        <div className="relative">
          <div>
            <Listbox.Button className="button button-outline button-sm text-xs w-40 space-x-1 justify-between">
              {value === QuestionType.SINGLE_CHOICE ? (
                <span className="text-sm material-symbols-rounded">
                  radio_button_checked
                </span>
              ) : (
                <span className="text-sm material-symbols-sharp">
                  check_box
                </span>
              )}

              <span className="block truncate">
                {capitalize(value.replace(/_/g, " ").toLowerCase())}
              </span>
              <span
                className={clsx(
                  "flex flex-grow justify-end text-sm material-symbols-rounded"
                )}
              >
                {open ? "expand_less" : "expand_more"}
              </span>
            </Listbox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-xs bg-white text-xs drop-shadow-md shadow">
              {type.map((option, index) => (
                <Listbox.Option as={Fragment} key={index} value={option}>
                  {({ selected }) => (
                    <div
                      className={clsx(
                        "relative cursor-pointer select-none py-2 px-3 flex items-center space-x-1",
                        {
                          "bg-xd-primary-purple-700/10 text-xd-primary-purple-800":
                            selected,
                          "text-xd-secondary-black-rgb hover:text-xd-primary-purple-700":
                            !selected,
                        }
                      )}
                    >
                      {option === "MULTIPLE_CHOICE" ? (
                        <span
                          className={clsx("text-sm material-symbols-sharp")}
                        >
                          check_box
                        </span>
                      ) : (
                        <span
                          className={clsx("text-sm material-symbols-rounded")}
                        >
                          radio_button_checked
                        </span>
                      )}
                      <span className={clsx("block truncate font-medium")}>
                        {capitalize(option.replace(/_/g, " ").toLowerCase())}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}
