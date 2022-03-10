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
    log('');
    log('准备发布');
    log('');
    await pnpmRun('gen:clean');
    log('');
    log('生成 ICON');
    log('');
    await pnpmRun('gen:json');
    log('');
    log('生成 CODE');
    await pnpmRun('gen:code');
    log('');
    log('打包 CODE');
    await pnpmRun('build:code');
    log('');
    log('编译 lib 使其支持 CDN 使用');
    await pnpmRun('gen:rollup');
    log('');
    log('语法检测');
    await pnpmRun('lint');
    log('');
    log('开始发布');
    log('');
  } catch (err) {
    errorLog('打包失败', true);
  }
};

(async () => {
  try {
    await beforeRelease();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
