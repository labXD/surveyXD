declare module "@analytics/google-analytics" {
  import { type AnalyticsPlugin } from "analytics"

  export interface GaConfig {
    measurementIds: Array<string>
  }

  // eslint-disable-next-line no-unused-vars
  function createGoogleAnalyticsPlugin(config: GaConfig): AnalyticsPlugin

  export default createGoogleAnalyticsPlugin
}

declare module "use-analytics" {
  import type { AnalyticsInstance } from "analytics"
  import type { VFC, ReactNode, FC } from "react"

  export interface AnalyticsProviderProps {
    children: ReactNode
    instance: AnalyticsInstance
  }

  export const AnalyticsProvider: FC<AnalyticsProviderProps>

  export interface AnalyticsConsumerProps {
    children: VFC<
      Pick<AnalyticsInstance, "track" | "page" | "identify" | " user">
    >
  }

  export const AnalyticsConsumer: FC<AnalyticsConsumerProps>

  export declare function useAnalytics(): AnalyticsInstance
}

declare module "analytics-plugin-do-not-track" {
  import { type AnalyticsPlugin } from "analytics"

  export default function createDoNotTrackPlugin(): AnalyticsPlugin
}

declare module "analytics-plugin-event-validation" {
  import { type AnalyticsPlugin } from "analytics"

  export interface EventValidation {
    context: string
    objects: Array<string>
  }

  export default function createEventValidationPlugin(
    validation: EventValidation
  ): AnalyticsPlugin
}
