/** @format */

import execa from 'execa';

import { log, errorLog } from '../packages/compiler/src';

const pnpmRun = async (name: string) => {
  await execa('pnpm', [name], {
    stdio: 'inherit',
  });
};

export const beforeRelease = async () => {
  try {
    log('准备发布');
    await pnpmRun('gen:clean');
    log('生成 ICON');
    await pnpmRun('gen:json');
    log('生成 CODE');
    await pnpmRun('gen:code');
    log('打包 CODE');
    await pnpmRun('build:code');
    // log('生成日志');
    // await changelog();
    log('开始发布');
  } catch (err) {
    errorLog('打包失败', true);
  }
};

(async () => {
  await beforeRelease();
})();
