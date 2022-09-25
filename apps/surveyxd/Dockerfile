FROM node:16-alpine AS builder
RUN corepack enable
ENV CI true

WORKDIR /app

# Copy root configs
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm fetch

# Copy surveyxd
COPY apps/surveyxd apps/surveyxd

RUN pnpm install -r --prefer-offline

WORKDIR /app/apps/surveyxd

ENV NEXT_TELEMETRY_DISABLED 1
ENV DATABASE_URL mysql://localhost:3306

RUN pnpm run db:gen
RUN pnpm build


COPY apps/surveyxd/prisma/schema.prisma ./.next/server/chunks/schema.prisma

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
RUN corepack enable

ENV CI true

WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-workspace.yaml /app/package.json ./

RUN pnpm fetch --prod

WORKDIR /app/apps/surveyxd


# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/apps/surveyxd/next.config.js ./
COPY --from=builder /app/apps/surveyxd/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/apps/surveyxd/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/apps/surveyxd/prisma/generated/libquery_engine-linux-musl.so.node ./.next/server/chunks/libquery_engine-linux-musl.so.node
COPY --from=builder /app/apps/surveyxd/package.json ./package.json

RUN pnpm install --prefer-offline --prod

USER nextjs

ENV PORT 8080
EXPOSE ${PORT}


# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]
