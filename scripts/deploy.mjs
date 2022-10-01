import { $, chalk } from "zx"

export const deployService = async ({
  serviceName,
  env,
  tag,
  envVars,
  secrets,
  clientSecrets,
}) => {
  if (!env) {
    env = "development"
  }

  const deploymentName =
    env && env !== "production" ? `${serviceName}-development` : serviceName

  try {
    const gcloudProjectNameRaw = await $`gcloud config get-value project`
    const gcloudProjectName = gcloudProjectNameRaw.stdout.replace("\n", "")

    const imageTag = `gcr.io/${gcloudProjectName}/${deploymentName}:${
      tag ?? "latest"
    }`

    const buildArgs = Object.keys(clientSecrets)
      .map((key) => `--build-arg ${key.toUpperCase()}=${clientSecrets[key]}`)
      .join(" ")
      .replace("\n", " ")

    console.log(chalk.blue(`Deploying ${serviceName} to ${env} environment`))

    let q = $.quote
    $.quote = (v) => v

    const buildCom =
      `docker build --platform linux/amd64 -f ./apps/${serviceName}/Dockerfile ./ --tag ${imageTag} ${buildArgs}`.replace(
        "\n",
        ""
      )

    await $`${buildCom}`

    console.log(chalk.green(`Built image ${imageTag}`))

    console.log(
      chalk.blue(`Pushing ${serviceName} to repo with name: ${imageTag}`)
    )
    await $`docker push ${imageTag}`

    $.quote = q
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
      baseDepComand += ` --tag ${tag} --no-traffic`
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

    q = $.quote
    $.quote = (v) => v
    const out = await $`${baseDepComand}`

    $.quote = q

    console.log(
      chalk.green(
        `Successfully deployed ${serviceName} into ${env} env using image ${imageTag}`
      )
    )

    if (!tag.includes("pr")) {
      await $`gcloud run services update-traffic ${deploymentName} --to-tags ${tag}=100`
    }

    return out
      .toString()
      .match(/(https?:\/\/[^ ]*)/)[0]
      .replace("\n", "")
  } catch (p) {
    console.log(chalk.red(`Failed to deploy ${serviceName} into ${env}`))

    console.log(chalk.red(`Exit code: ${p.exitCode}`))
    console.log(chalk.red(`Error: ${p.stderr}`))

    await $`exit ${p.exitCode}`
  }
}

export const main = async ({ service, env, tag }) => {
  switch (service) {
    case "surveyxd": {
      if (env === "development") {
        console.log(
          chalk.greenBright("Starting Deployment into development env")
        )

        const gitHash = await $`git rev-parse --short HEAD`

        await deployService({
          serviceName: service,
          tag: `${gitHash}`,
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
          clientSecrets: {
            url: "https://dev.surveyxd.com",
          },
        })

        if (process.env.CI) {
          const command = `echo "::set-output name=url::https://dev.surveyxd.com"`

          const q = $.quote
          $.quote = (v) => v
          await $`${command}`

          $.quote = q
        }

        break
      }

      if (env === "preview") {
        if (!tag) {
          console.error(
            chalk.red("Error: Tag not provided for preview deployment")
          )
          break
        }
        const url = await deployService({
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
          clientSecrets: {
            url: `https://${tag}---surveyxd-development-clk4zbjf3q-ue.a.run.app`,
          },
        })

        if (process.env.CI) {
          const command = `echo "::set-output name=url::${`https://${tag}---surveyxd-development-clk4zbjf3q-ue.a.run.app`}"`

          const q = $.quote
          $.quote = (v) => v
          await $`${command}`

          $.quote = q
        }

        break
      }

      await deployService({
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

      if (process.env.CI) {
        const command = `echo "::set-output name=url::https://www.surveyxd.com"`

        const q = $.quote
        $.quote = (v) => v
        await $`${command}`

        $.quote = q
      }

      break
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
