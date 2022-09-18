import { $, chalk } from "zx"

export const deployService = async ({
  serviceName,
  env,
  tag,
  envVars,
  secrets,
}) => {
  if (!tag) {
    tag = "latest"
  }

  if (!env) {
    env = "development"
  }

  const deploymentName =
    env && env !== "production" ? `${serviceName}-${env}` : serviceName

  try {
    const gcloudProjectNameRaw = await $`gcloud config get-value project`
    const gcloudProjectName = gcloudProjectNameRaw.stdout.replace("\n", "")

    const imageTag = `gcr.io/${gcloudProjectName}/${deploymentName}:${
      tag ?? env
    }`

    console.log(chalk.blue(`Deploying ${serviceName} to ${env} environment`))
    await $`docker build --platform linux/amd64 -f ./apps/${serviceName}/Dockerfile ./ --tag ${imageTag}`

    console.log(
      chalk.blue(`Pushing ${serviceName} to repo with name: ${imageTag}`)
    )
    await $`docker push ${imageTag}`

    console.log(chalk.blue(`Deploying ${serviceName} to ${env} environment`))
    let baseDepComand = `gcloud run deploy ${deploymentName} --image ${imageTag} --region us-east1 --platform managed --memory 1Gi`

    // add env vars
    if (envVars) {
      console.log(chalk.blue(`Setting env vars for ${serviceName}`))
      const envVarsString = Object.keys(envVars)
        .map((key) => `${key}=${envVars[key]}`)
        .join(",")

      baseDepComand += ` --set-env-vars "${envVarsString}"`
    }

    if (tag) {
      baseDepComand += ` --tag ${tag}`
    }

    // add secrets
    if (secrets) {
      const secretsString = Object.keys(secrets)
        .map(
          (key) =>
            `${key}=${serviceName.toUpperCase()}_${
              secrets[key]
            }_${env.toUpperCase()}:latest`
        )
        .join(",")

      baseDepComand += ` --set-secrets "${secretsString}"`
    }

    const q = $.quote
    $.quote = (v) => v
    await $`${baseDepComand}`
    $.quote = q

    console.log(
      chalk.green(
        `Successfully deployed ${serviceName} into ${env} env using image ${imageTag}`
      )
    )
  } catch (p) {
    console.log(chalk.red(`Failed to deploy ${serviceName} into ${env}`))

    console.log(chalk.red(`Exit code: ${p.exitCode}`))
    console.log(chalk.red(`Error: ${p.stderr}`))
  }
}

export const main = async ({ service, env, tag }) => {
  switch (service) {
    case "surveyxd": {
      if (env === "development") {
        return deployService({
          serviceName: service,
          env,
          envVars: {
            APP_ENV: "developoment",
            NEXTAUTH_URL: "dev.surveyxd.com",
          },
          secrets: {
            DATABASE_URL: "DATABASE_URL",
            NEXTAUTH_SECRET: "NEXT_AUTH_SECRET",
            GOOGLE_CLIENT_ID: "GOOGLE_CLIENT_ID",
            GOOGLE_CLIENT_SECRET: "GOOGLE_CLIENT_SECRET",
          },
        })
      }

      if (env === "preview") {
        if (!tag) {
          console.error(
            chalk.red("Error: Tag not provided for preview deployment")
          )
          break
        }
        return deployService({
          serviceName: service,
          env: "development",
          tag,
          envVars: {
            APP_ENV: "preview",
            NEXTAUTH_URL: `https://${tag}---surveyxd-development-clk4zbjf3q-ue.a.run.app`,
          },
          secrets: {
            DATABASE_URL: "DATABASE_URL",
            NEXTAUTH_SECRET: "NEXT_AUTH_SECRET",
            GOOGLE_CLIENT_ID: "GOOGLE_CLIENT_ID",
            GOOGLE_CLIENT_SECRET: "GOOGLE_CLIENT_SECRET",
          },
        })
      }

      return deployService({
        serviceName: service,
        env,
        envVars: {
          APP_ENV: "production",
          NEXTAUTH_URL: "https://surveyxd.com",
        },
        secrets: {
          DATABASE_URL: "DATABASE_URL",
          NEXTAUTH_SECRET: "NEXT_AUTH_SECRET",
          GOOGLE_CLIENT_ID: "GOOGLE_CLIENT_ID",
          GOOGLE_CLIENT_SECRET: "GOOGLE_CLIENT_SECRET",
        },
      })
    }

    default:
      break
  }
}

export const command = {
  command: "deploy <service> [env] [tag]",
  describe: "Deploy a service to an environment",
  builder: (yargs) => yargs.default("env", "development"),
  handler: async (argv) => {
    main(argv)
  },
}
