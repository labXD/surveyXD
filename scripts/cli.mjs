#!/usr/bin/env node

import yargs from "yargs/yargs"

import { command as ciCommand } from "./ci.mjs"
import { command as deployCommand } from "./deploy.mjs"

const cli = async () =>
  yargs(process.argv.slice(2))
    .command(deployCommand)
    .command(ciCommand)
    .demandCommand()
    .help().argv

cli()
