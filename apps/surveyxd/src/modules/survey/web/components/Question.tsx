import { Listbox, Switch, Transition } from "@headlessui/react"
import clsx from "clsx"
import { Fragment, useState } from "react"

import { QuestionType, QuestionTypeOptions, TextInput } from "./Forms"

export const Question = () => {
  const questionOption = ["single", "multiple"]
  const [selected, setSelected] = useState<QuestionTypeOptions>("single")
  const [enabled, setEnabled] = useState(false)
  // capitalize the first letter of the string
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <div className="xd-card xd-card-border-l xd-card-focus">
      <TextInput placeholder="Question title" />
      <div className="pt-3 flex justify-between">
        <button className="xd-button-ghost xd-button-sm px-0">
          <span className="text-xs material-symbols-outlined">add</span>
          <span>Add description</span>
        </button>

        <Listbox
          value={selected}
          onChange={(item) => {
            setSelected(item)
          }}
        >
          <div className="relative">
            <Listbox.Button className="relative xd-button-secondary-light xd-button-sm w-36">
              <span className="text-xs material-symbols-outlined">
                {selected === "single" ? "radio_button_checked" : "check_box"}
              </span>
              <span className="flex flex-grow truncate">
                {capitalize(selected)} choice
              </span>
              <span className="text-xs material-symbols-outlined">
                unfold_more
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xs bg-white text-xs drop-shadow-md shadow">
                {questionOption.map((option, index) => (
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
                          className={clsx("text-xs material-symbols-outlined", {
                            "text-neutral-300": !selected,
                            "text-xd-purple-primary": selected,
                          })}
                        >
                          {selected ? "check" : "trending_flat"}
                        </span>

                        <span className={clsx("block truncate font-semibold")}>
                          {capitalize(option)} choice
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div className="pt-3 space-y-4">
        <QuestionType type={selected} />
      </div>
      <div className="flex justify-end pt-8">
        <div className="flex items-center">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={clsx(
              "relative h-4 w-7 cursor-pointer rounded-full transition-all",
              {
                "bg-xd-purple-primary": enabled,
                "bg-slate-400": !enabled,
              }
            )}
          >
            <span
              aria-hidden="true"
              className={clsx(
                "absolute left-[2px] top-[2px] h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition-all",
                {
                  "translate-x-full": enabled,
                  "translate-x-0": !enabled,
                }
              )}
            />
          </Switch>
          <span className="pl-2 text-xd-text-primary leading-4">Required</span>
        </div>
      </div>
    </div>
  )
}
