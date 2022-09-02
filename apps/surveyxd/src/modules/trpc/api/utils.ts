import * as trpc from '@trpc/server';

export type Context = unknown

export const createRouter = () => {
  return trpc.router<Context>();
}
