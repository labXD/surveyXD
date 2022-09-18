import { Listbox, Transition } from "@headlessui/react"
import clsx from "clsx"
import { Fragment } from "react"
import { FieldValues, useController, UseControllerProps } from "react-hook-form"

import { QuestionType } from "@/prisma"

import { useQuestionState } from "../containers/QuestionProvider"
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

  function _onChange(e: string) {
    onChange(e)
    toggle()
  }

  const { type } = props
  return (
    <Listbox value={value} onChange={_onChange}>
      <div className="relative">
        <Listbox.Button className="relative xd-button-secondary-light xd-button-sm w-36">
          <span className="text-xs material-symbols-rounded">
            {value === QuestionType.SINGLE_CHOICE
              ? "radio_button_checked"
              : "check_box"}
          </span>
          <span className="flex flex-grow truncate">
            {value && capitalize(value).replace("_CHOICE", "")}&nbsp;choice
          </span>
          <span className="text-xs material-symbols-rounded">unfold_more</span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-xs bg-white text-xs drop-shadow-md shadow">
            {type.map((option, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  clsx(
                    "relative cursor-default select-none py-2 px-3 flex items-center space-x-1",
                    {
                      "bg-indigo-50 text-xd-purple-primary": active,
                      "text-xd-text-primary/[.65]": !active,
                    }
                  )
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={clsx("text-xs material-symbols-rounded", {
                        "text-neutral-300": !selected,
                        "text-xd-purple-primary": selected,
                      })}
                    >
                      {selected ? "check" : "trending_flat"}
                    </span>

                    <span className={clsx("block truncate font-semibold")}>
                      {option && capitalize(option.replace("_CHOICE", ""))}
                      &nbsp;choice
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
