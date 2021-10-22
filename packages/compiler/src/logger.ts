/** @format */

import chalk from 'chalk';

export const errorLog = (msg: string, end?: boolean) => {
  // eslint-disable-next-line no-console
  console.log(chalk.blue.bold(`💦 [Water Icon CI]: `), chalk.red(msg));
  if (end) {
    // eslint-disable-next-line no-console
    console.log();
    process.exit(1);
  }
};

export const log = (msg: string) => {
  // eslint-disable-next-line no-console
  console.log(
    msg ? (chalk.blue.bold(`💦 [Water Icon CI]: `), chalk.red(msg)) : '',
  );
};
