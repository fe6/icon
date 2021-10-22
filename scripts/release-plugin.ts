/** @format */

import releaseIt from 'release-it';
import execa from 'execa';
import { resolve } from 'path';

import { changelog } from './changelog';
import { log, errorLog } from '../packages/compiler/src';

const pnpmRun = async (name: string) => {
  await execa('pnpm', [name], {
    stdio: 'inherit',
  });
};

class ReleasePlugin extends releaseIt.Plugin {
  constructor() {
    super();
  }

  async beforeRelease() {
    try {
      log('准备发布');
      await pnpmRun('gen:clean');
      log('生成 ICON');
      await pnpmRun('gen:json');
      log('生成 CODE');
      await pnpmRun('gen:code');
      log('打包 CODE');
      await pnpmRun('build:code');
      log('生成日志');
      await changelog();
      log('开始发布');
    } catch (err) {
      errorLog('打包失败');
      process.exit(1);
    }
  }

  afterRelease() {
    const pkgDir = process.cwd();
    const pkgPath = resolve(pkgDir, 'package.json');
    const pkg = require(pkgPath);
    const pkgName = pkg.name.replace(/^@fe6\//, '');

    log(`成功发布 ${pkgName}`);
  }
}

module.exports = ReleasePlugin;
