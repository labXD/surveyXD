import { z } from "zod"

import { EnvSchema } from "./env.config.js"

type Env = z.infer<typeof EnvSchema>

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
