const { z } = require("zod");
const EnvSchema = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
});

const verifyEnv = () => {
  const val = EnvSchema.passthrough().safeParse(process.env);

  if(!val.success) {
    console.error("Environment variables are not valid");
    console.error(val.error.issues);
    throw new Error(val.error.issues.map((issue) => issue.message).join(", "));
  }
};

module.exports = { verifyEnv, EnvSchema };
