import createGoogleAnalyticsPlugin from "@analytics/google-analytics"
import Analytics from "analytics"
import doNotTrack from "analytics-plugin-do-not-track"
import eventValidation from "analytics-plugin-event-validation"

const __DEV__ = process.env.NODE_ENV === "development"
const eventValidationPlugin = eventValidation({
  context: "app",
  objects: ["user", "survey", "response", "dashboard"],
})

const plugins = __DEV__
  ? [eventValidationPlugin]
  : [
      eventValidationPlugin,
      createGoogleAnalyticsPlugin({
        measurementIds: [
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID || "",
        ],
      }),
      doNotTrack(),
    ]

const analytics = Analytics({
  app: "surveyxd",
  debug: __DEV__,
  plugins,
})

export default analytics
