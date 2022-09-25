// middleware.ts
import { nanoid } from "nanoid"
import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  // response doesn't know about the cookies in the incmoing req. Passing it in
  // https://github.com/vercel/next.js/issues/40146#issuecomment-1236180700
  const res = NextResponse.next({
    headers: {
      cookie: req.headers.get("cookie") ?? "",
    },
  })

  const token = await getToken({
    req,
  })

  const isAuthenticated = !!token

  const anonUserId = req.cookies.get("anon-user-id")

  if (!isAuthenticated && !anonUserId) {
    // if anon, attach anon id
    // add anonUserId cookie
    res.cookies.set("anon-user-id", nanoid())
  }

  if (isAuthenticated) {
    // if no anon and has anon id, remove it
    res.cookies.delete("anon-user-id")
    req.cookies.delete("anon-user-id")
  }

  return res
}
