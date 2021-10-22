/** @format */

import { resolve } from 'path';

import { log } from '../packages/compiler/src';

export const afterRelease = () => {
  const pkgDir = process.cwd();
  const pkgPath = resolve(pkgDir, 'package.json');
  const pkg = require(pkgPath);
  const pkgName = pkg.name.replace(/^@fe6\//, '');

  log(`成功发布 ${pkgName}`);
};

afterRelease();
