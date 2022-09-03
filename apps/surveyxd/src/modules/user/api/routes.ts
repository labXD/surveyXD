import { createRouter } from "@/trpc/api";
import { z } from "zod";

export const userRoutes = createRouter().query("hello", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  resolve({ input }) {
    return {
      greeting: `hello ${input?.text ?? "world"}`,
    };
  },
});
