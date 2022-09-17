import { Switch } from "@headlessui/react"
import clsx from "clsx"
import { FieldValues, useController, UseControllerProps } from "react-hook-form"

type RequiredToggleTypes<T extends FieldValues> = UseControllerProps<T>

export const RequiredToggle = <T extends FieldValues>(
  props: RequiredToggleTypes<T>
) => {
  const {
    field: { value, onChange },
  } = useController(props)

  return (
    <Switch as="div" checked={value} onChange={onChange}>
      <div className="flex items-center transition-all group cursor-pointer">
        <div
          className={clsx(
            "relative h-4 w-7 cursor-pointer rounded-full transition-all",
            {
              "bg-xd-primary-purple-700": value,
              "bg-xd-disabled-black-rgb": !value,
            }
          )}
        >
          <span
            aria-hidden="true"
            className={clsx(
              "absolute left-[2px] top-[2px] h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition-all",
              {
                "translate-x-full": value,
                "translate-x-0": !value,
              }
            )}
          />
        </div>
        <span
          className={clsx(
            "pl-2 leading-4 select-none text-xd-secondary-black-rgb"
          )}
        >
          Required
        </span>
      </div>
    </Switch>
  )
}
