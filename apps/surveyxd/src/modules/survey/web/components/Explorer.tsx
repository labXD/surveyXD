import { Listbox, Switch, Transition } from "@headlessui/react"
import * as SandDanceReact from "@msrvida/sanddance-react"
import clsx from "clsx"
import * as React from "react"
import * as ReactDOM from "react-dom"
import NoSSR from "react-no-ssr"
import * as vega from "vega"

export const XDSandDance: React.FC = () => {
  const chartOption = [
    "barchart",
    "barchartH",
    "barchartV",
    "density",
    "grid",
    "scatterplot",
    "stacks",
    // "strips",
    // "treemap",
  ]
  const [selected, setSelected] = React.useState("barchartV")
  const [enabled, setEnabled] = React.useState(false)
  SandDanceReact.use(React, ReactDOM, vega)

  const names = ["Jimmy", "Walee", "DJ"]

  const data = Array.from({ length: 1000 }, () => ({
    name: names[Math.floor(Math.random() * names.length)],
    "Rate your knowledge of JavaScript": Math.floor(Math.random() * 5) + 1,
    "Rate your knowledge of React": Math.floor(Math.random() * 5) + 1,
    "Rate your knowledge of Vue": Math.floor(Math.random() * 5) + 1,
  }))

  const insight = {
    columns: {
      x: "Rate your knowledge of JavaScript",
      y: "Rate your knowledge of React",
      z: "Rate your knowledge of Vue",
      color: "Rate your knowledge of React",
      sort: "Rate your knowledge of React",
    },
    scheme: "category10",
    chart: selected,
    view: enabled ? "3d" : "2d",
    size: {
      height: 800,
      width: 800,
    },
    viewerOptions: {
      fontFamily: "Red Hat Text",
    },
    // hideLegend: true,
  }

  const setup = {
    camera: {
      position: [0, 0, 0],
      captureSize: {
        height: 947,
        width: 1496,
      },
    },
    renderer: {
      advanced: false,
      advancedOptions: {
        bloomIntensity: 2,
        isBloomEnabled: false,
        isDofEnabled: false,
        dofFocusRange: 0.25,
        isFxaaEnabled: false,
        isShadowEnabled: true,
        isSsaoEnabled: true,
      },
      basicOptions: {
        antialias: true,
      },
    },
    transition: {
      type: "position",
      dimension: "x",
    },
    transitionDurations: {
      position: 702,
      stagger: 1998.0000000000002,
      view: 600,
    },
  }

  return (
    <div className="relative mx-auto bg-transparent w-full">
      <NoSSR>
        {/* Choose map */}
        <div className="absolute top-4 right-4 z-20">
          <Listbox
            value={selected}
            onChange={(item) => {
              setSelected(item)
            }}
          >
            <div className="relative">
              <Listbox.Button className="drop-shadow relative xd-button-secondary-light xd-button-sm w-36">
                <span className="flex flex-grow truncate">{selected}</span>
                <span className="text-xs material-symbols-outlined">
                  unfold_more
                </span>
              </Listbox.Button>
              <Transition
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-80 w-full overflow-auto rounded-xs bg-white text-xs drop-shadow-md shadow">
                  {chartOption.map((option, index) => (
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
                            className={clsx(
                              "text-xs material-symbols-outlined",
                              {
                                "text-neutral-300": !selected,
                                "text-xd-purple-primary": selected,
                              }
                            )}
                          >
                            {selected ? "check" : "trending_flat"}
                          </span>

                          <span
                            className={clsx("block truncate font-semibold")}
                          >
                            {option}
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
        {/* 3D Toggle */}
        <div className="absolute top-16 z-10 right-4 flex items-center">
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
          <span className="pl-2 text-xd-text-primary leading-4">3D</span>
        </div>
        {/* @ts-ignore-expect-error */}
        <SandDanceReact.Viewer data={data} insight={insight} setup={setup} />
      </NoSSR>
    </div>
  )
}
