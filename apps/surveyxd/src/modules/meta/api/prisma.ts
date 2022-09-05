import { Prisma, PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

 export let prisma: PrismaClient

const prismaOptions: Prisma.Subset<
  Prisma.PrismaClientOptions,
  Prisma.PrismaClientOptions
> = {
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(prismaOptions)
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient(prismaOptions)
  }

  prisma = global.prisma
}

