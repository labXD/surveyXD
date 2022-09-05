import { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {prisma} from '@/meta/api'

/**
* # Authentication
*
* ## Google OAuthWe are leveraging `next-auth` to handle login flow. Primarily, for google
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
  secret: process.env.NEXT_AUTH_SECRET
};
