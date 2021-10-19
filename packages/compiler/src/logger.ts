/** @format */

import chalk from 'chalk';

export const errorLog = (msg: string) => {
  // eslint-disable-next-line no-console
  console.log(chalk.blue.bold(`💦 [Water Icon CI]: `), chalk.red(msg));
};

export const log = (msg: string) => {
  // eslint-disable-next-line no-console
  console.log(chalk.blue.bold(`💦 [Water Icon CI]: `), chalk.red(msg));
};
