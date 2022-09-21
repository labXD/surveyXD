import { FC } from "react"

interface ErrorUIInterface {
  buttonIcon?: string
  buttonText?: string
  code: string | number
  children?: string
  onClick?: () => void
}

export const ErrorUI: FC<ErrorUIInterface> = ({
  buttonIcon,
  buttonText,
  children,
  code,
  onClick,
}) => {
  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <div className="tracking-widest uppercase text-lg font-medium">
        {children}
      </div>
      <h1 className="text-[7rem] md:text-[9rem] tracking-widest font-bold text-white drop-shadow-lg">
        {code}
      </h1>
      {(buttonText || buttonIcon) && (
        <div>
          <button
            className="button button-outline space-x-4 ring-xd-disabled-black-rgb"
            onClick={onClick}
          >
            {buttonIcon && (
              <span className="material-symbols-rounded">{buttonIcon}</span>
            )}
            {buttonText && <span>{buttonText}</span>}
          </button>
        </div>
      )}
    </main>
  )
}
