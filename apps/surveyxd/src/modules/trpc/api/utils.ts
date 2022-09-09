import * as trpc from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"
import { unstable_getServerSession as getServerSession } from "next-auth/next"

import { nextAuthOptions } from "@/auth/api"
import { prisma } from "@/meta/api"

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => {
  const getUserSession = () => {
    if (!opts?.req || !opts?.res) {
      return undefined
    }

    return getServerSession(opts?.req, opts?.res, nextAuthOptions)
  }

  const userSession = await getUserSession()

  return {
    user: userSession?.user,
    prisma,
    req: opts?.req,
    res: opts?.res,
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>

export const createRouter = () => {
  return trpc.router<Context>()
}
