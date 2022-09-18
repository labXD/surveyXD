import { Menu, Transition } from "@headlessui/react"
import clsx from "clsx"
import { signIn, signOut, useSession } from "next-auth/react"
import { FC, Fragment, ReactNode } from "react"

interface DropdownMenuWrapperInterface {
  children: ReactNode
  menuBtnCls?: string
}
const DropdownMenuWrapper: FC<DropdownMenuWrapperInterface> = ({
  children,
  menuBtnCls,
}) => {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button
          className={clsx(
            menuBtnCls,
            "button-sm text-xd-secondary-black-rgb hover:text-xd-primary-purple-800"
          )}
        >
          <span className="material-symbols-rounded">menu</span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 right-0 w-56 origin-top-right divide-y divide-xd-neutral-300 rounded-sm bg-white ring ring-xd-primary-purple-700/20">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
export const HeaderDropdownMenu: FC = () => {
  const { data: session } = useSession()
  return (
    <DropdownMenuWrapper>
      {session?.user && (
        <Menu.Item as="div">
          {({ active }) => (
            <button
              className={clsx(
                "xd-button-ghost button-sm w-full space-x-2 justify-start",
                {
                  "text-xd-secondary-black-rgb": !active,
                  "bg-xd-primary-purple-700 text-white": active,
                }
              )}
            >
              <span className={clsx("material-symbols-rounded")}>
                corporate_fare
              </span>
              <span>Dashboard</span>
            </button>
          )}
        </Menu.Item>
      )}

      <Menu.Item as="div">
        {({ active }) => (
          <button
            onClick={() => (session?.user ? signOut() : signIn("google"))}
            className={clsx(
              "xd-button-ghost button-sm w-full space-x-2 justify-start",
              {
                "text-xd-secondary-black-rgb": !active,
                "bg-xd-primary-purple-700 text-white": active,
              }
            )}
          >
            <span className={clsx("material-symbols-rounded")}>
              {session?.user ? "logout" : "login"}
            </span>
            <span> {session?.user ? "Log out" : "Log in"}</span>
          </button>
        )}
      </Menu.Item>
    </DropdownMenuWrapper>
  )
}

type MenuItem = {
  label: string
  icon?: string
  onClick?: () => void
  buttonType?: "button" | "submit" | "reset"
}
interface XDDropdownMenuInterface {
  data: MenuItem[]
}

export const SurveyDropdownMenu: FC<XDDropdownMenuInterface> = ({ data }) => {
  return (
    <DropdownMenuWrapper menuBtnCls="p-0">
      {data.map((item: MenuItem, index) => (
        <Menu.Item as="div" key={index}>
          {({ active }) => (
            <button
              onClick={item.onClick}
              type={item.buttonType}
              className={clsx(
                "xd-button-ghost w-full space-x-2 justify-start",
                {
                  "text-xd-secondary-black-rgb": !active,
                  "bg-xd-primary-purple-700 text-white": active,
                }
              )}
            >
              {item.icon && (
                <span className={clsx("material-symbols-rounded")}>
                  {item.icon}
                </span>
              )}
              <span>{item.label}</span>
            </button>
          )}
        </Menu.Item>
      ))}
    </DropdownMenuWrapper>
  )
}
