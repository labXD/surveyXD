#!/usr/bin/env node

import yargs from "yargs/yargs"

import { command as deployCommand } from "./deploy.mjs"

const cli = async () =>
  yargs(process.argv.slice(2)).command(deployCommand).demandCommand().help()
    .argv

cli()
