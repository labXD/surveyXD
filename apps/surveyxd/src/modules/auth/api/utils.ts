import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {
  type DefaultSession,
  type DefaultUser,
  type NextAuthOptions,
} from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { prisma } from "@/meta/api"
import { PrismaClient, User } from "@/prisma"

declare module "next-auth" {
  export interface User extends DefaultUser {
    id: string
  }

  export interface Session extends DefaultSession {
    user: DefaultSession["user"] & { id: string }
  }
}

const getUserCreator = (prisma: PrismaClient) => {
  const cache: Record<string, User> = {}

  return async (email: string) => {
    if (cache[email]) {
      return cache[email]
    }

    const res = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (res) {
      cache[email] = res
    }

    return res
  }
}

const getUser = getUserCreator(prisma)

/**
 * # Authentication
 *
 * ## Google OAuth
 *
 * We are leveraging `next-auth` to handle login flow. Primarily, for google
 * authetication to work, we need to ensure `GOOGLE_CLIENT_ID` and
 * `GOOGLE_CLIENT_SECRET` is included in your `.env` files.
 */
export const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, user }) {
      if (!session.user?.email) {
        return session
      }

      console.log(session, user)
      const res = await getUser(session.user.email)

      if (!res) {
        return session
      }

      session.user.id = res.id
      // Send properties to the client, like an access_token from a provider.
      return session
    },
  },
}
