/** @format */

import chalk from 'chalk';

export const errorLog = (msg: string, end?: boolean) => {
  console.log(chalk.blue.bold(`💦 [Water Icon CI]: `), chalk.red(msg));
  if (end) {
    console.log();
    process.exit(1);
  }
};

export const log = (msg: string) => {
  if (msg) {
    console.log(chalk.blue.bold(`💦 [Water Icon CI]: `), chalk.red(msg));
  } else {
    console.log();
  }
};
