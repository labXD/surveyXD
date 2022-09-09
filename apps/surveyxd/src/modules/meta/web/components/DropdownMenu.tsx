import { Menu, Transition } from "@headlessui/react"
import clsx from "clsx"
import { signIn, signOut, useSession } from "next-auth/react"
import { FC, Fragment } from "react"

export const DropdownMenu: FC = () => {
  const { data: session } = useSession()
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="p-2 text-xd-text-primary/80 hover:text-xd-purple-500">
          <span className="material-symbols-outlined">menu</span>
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
        <Menu.Items className="absolute right-0 w-56 origin-top-right divide-y divide-neutral-300 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {session?.user && (
            <div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={clsx(
                      "rounded-sm group flex w-full items-center px-4 py-2 text-sm space-x-2 transition-all",
                      {
                        "text-xd-text-primary": !active,
                        "bg-xd-purple-500 text-white": active,
                      }
                    )}
                  >
                    <span className={clsx("material-symbols-outlined")}>
                      corporate_fare
                    </span>
                    <span>Dashboard</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          )}
          <div>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => (session?.user ? signOut() : signIn("google"))}
                  className={clsx(
                    "rounded-sm group flex w-full items-center px-4 py-2 text-sm space-x-2 transition-all",
                    {
                      "text-xd-text-primary": !active,
                      "bg-xd-purple-500 text-white": active,
                    }
                  )}
                >
                  <span className={clsx("material-symbols-outlined")}>
                    {session?.user ? "logout" : "login"}
                  </span>
                  <span> {session?.user ? "Log out" : "Log in"}</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
