import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

export interface ComposableMiddlewareFnOpts {
  req: NextRequest
  res: NextResponse
  fetchEvent: NextFetchEvent
}

export type ComposableMiddlewareFn = (
  opts: ComposableMiddlewareOpts
) => ComposableMiddlewareOpts | (() => NextResponse)

export interface ComposableMiddlewareOpts {
  middleware: ComposableMiddlewareFn[]
  matcher: string[]
}

export interface CreateMiddlewareOpts {
  compose: ComposableMiddlewareOpts[]
}

export const createMiddleware = (opts: CreateMiddlewareOpts) => {
  const res = new NextResponse()

  return (req: NextRequest, fetchEvent: NextFetchEvent) => {}
}
