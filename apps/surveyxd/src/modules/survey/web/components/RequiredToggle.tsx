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
    <div className="flex items-center">
      <Switch
        checked={value}
        onChange={onChange}
        className={clsx(
          "relative h-4 w-7 cursor-pointer rounded-full transition-all",
          {
            "bg-xd-purple-primary": value,
            "bg-slate-400": !value,
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
      </Switch>
      <span className="pl-2 text-xd-text-primary leading-4">Required</span>
    </div>
  )
}
