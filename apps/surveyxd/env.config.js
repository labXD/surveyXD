const { z } = require("zod")

const EnvSchema = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  APP_ENV: z.enum(["local", "development", "production"]),
  URL: z.string().optional(),
  DATABASE_URL: z.string(),
  NEXTAUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string(),
})

const verifyEnv = () => {
  const val = EnvSchema.passthrough().safeParse(process.env)

  if (!val.success) {
    const msg = val.error.format()
    console.error(msg)
    throw new Error("Invalid env vars set")
  }
}

module.exports = { verifyEnv, EnvSchema }
