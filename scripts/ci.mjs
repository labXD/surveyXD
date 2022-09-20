import { $ } from "zx"

const setEnv = (eventType) => {
  const q = $.quote
  $.quote = (v) => v

  switch (eventType) {
    case "push":
      $`echo "::set-output name=env_name::development"`
      break

    case "pull_request":
      $`echo "::set-output name=env_name::preview"`
      break

    default:
      $`echo "::set-output name=env_name::production"`
      break
  }

  $.quote = q
}

export const main = ({ utils, eventType }) => {
  console.log(utils, eventType)

  switch (utils) {
    case "set-env":
      setEnv(eventType)
      break

    default:
      break
  }
}

export const command = {
  command: "ci <utils>",
  describe: "Utility commands for CI",
  builder: {
    "event-type": {
      describe: "GHA event type",
      demandOption: true,
      type: "string",
    },
  },
  handler: async (argv) => {
    main(argv)
  },
}
