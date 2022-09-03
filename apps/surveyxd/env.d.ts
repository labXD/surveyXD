import { EnvSchema } from "./env.config.js";
import { z } from "zod";

type Env = z.infer<typeof EnvSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
