import { surveyRoutes } from "@/survey/api"
import { userRoutes } from "@/user/api"

import { createRouter } from "./utils"

export const appRouter = createRouter()
  .merge("user.", userRoutes)
  .merge("survey.", surveyRoutes)

export type AppRouter = typeof appRouter
