import NextAuth from "next-auth";

import { nextAuthOptions } from "@/auth/api";

export default NextAuth(nextAuthOptions);
