import {$, chalk} from 'zx'

export const deployService = async ({serviceName, env, tag, envVars, secrets}) => {
  if (!tag) {
    tag = 'latest'
  }

  if (!env) {
    env = 'development'
  }

  const deploymentName = (env && env !== 'production' ? `${serviceName}-${env}` : serviceName)

  try {
    const gcloudProjectNameRaw = await $`gcloud config get-value project`
    const gcloudProjectName = gcloudProjectNameRaw.stdout.replace('\n', '')

    const imageTag = `gcr.io/${gcloudProjectName}/${deploymentName}:${tag}`

    console.log(chalk.blue(`Deploying ${serviceName} to ${env} environment`))
    /* await $`docker build --platform linux/amd64 -f ./apps/${serviceName}/Dockerfile ./ --tag ${imageTag}` */

    console.log(chalk.blue(`Pushing ${serviceName} to repo with name: ${imageTag}`))
    /* await $`docker push ${imageTag}` */

    console.log(chalk.blue(`Deploying ${serviceName} to ${env} environment`))
    const baseDepComand = `gcloud run deploy ${deploymentName} --image ${imageTag} --region us-east1 --platform managed --memory 1Gi`

    if (envVars) {
      console.log(chalk.blue(`Setting env vars for ${serviceName}`))
      const envVarsString = Object.keys(envVars).map(key => `${key}=${envVars[key]}`).join(',')
      baseDepComand.concat(' --set-env-vars ', envVarsString)
    }

    if (secrets) {
      const secretsString = Object.keys(secrets).map(key => `${key}=${secrets[key]}`).join(' ')
      baseDepComand.concat(' --set-secrets ', secretsString)
    }

    /* await $`${baseDepComand}` */
    console.log(baseDepComand)

    console.log(chalk.green(`Successfully deployed ${serviceName} into ${env} env using image ${imageTag}`))
  } catch(p) {
    console.log(chalk.red(`Failed to deploy ${serviceName} into ${env}`))

    console.log(chalk.red(`Exit code: ${p.exitCode}`))
    console.log(chalk.red(`Error: ${p.stderr}`))
  }
}

export const main = async ({service, env}) => {
  switch (service) {
    case 'surveyxd':
      await deployService({serviceName: service, env, envVars: {TEST: 'TEST'}})
      break;

    default:
      break;
  }
}

export const command = {
  command: 'deploy <service> [env]',
  describe: 'Deploy a service to an environment',
  builder: (yargs) => yargs.default('env', 'development'),
  handler: async (argv) => {
    main(argv)
  }
}
