/** @format */
// 参照 https://github.com/vueuse/vueuse

import type { Options as ESBuildOptions } from 'rollup-plugin-esbuild';
import fs from 'fs';
import path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import type { RollupOptions } from 'rollup';
import { firstCapitalize, camelize } from '@fe6/shared';

import { log } from '../packages/compiler/src';

const configs: RollupOptions[] = [];

const external = ['vue'];

const pwd = process.cwd();

const esbuildMinifer = (options: ESBuildOptions) => {
  const { renderChunk } = esbuild(options);

  return {
    name: 'esbuild-minifer',
    renderChunk,
  };
};

const rollupOutput = (pkgLib: string, fileName: string, dirPath: string) => {
  const prefix = dirPath ? dirPath.replace('/', '') : '';
  const theOutput: any = {
    file: `${pkgLib}${dirPath}/${fileName}.js`,
    format: 'iife',
    name: firstCapitalize(camelize(`${prefix}-${fileName}`)),
    sourcemap: false,
    globals: {
      vue: 'Vue',
    },
    exports: 'named',
    plugins: [
      esbuildMinifer({
        minify: true,
      }),
    ],
  };
  return theOutput;
};

const renderRollupConfig = (pkgName) => {
  const pkgDir = `${pwd}/packages/${pkgName}/`;
  const pkgLib = `${pkgDir}lib`;
  const pkgIife = `${pkgDir}iife`;

  if (fs.existsSync(pkgLib)) {
    log(`开始生成 ${pkgName} 的 icons 的 rollup 配置`);
    const theIcons = fs
      .readdirSync(`${pkgLib}/icons`)
      .filter((file) => path.extname(file) === '.js');
    theIcons.forEach(async (fileFullName: string) => {
      const fileName = fileFullName.replace('.js', '');
      configs.push({
        input: `${pkgLib}/icons/${fileFullName}`,
        output: [rollupOutput(pkgIife, fileName, '/icons')],
        plugins: [esbuild()],
        external,
      });
    });
    log(`rollup 配置生成结束 rollup `);
  }
  const pkgRuntime = `${pkgLib}/runtime`;
  const pkgIifeRuntime = `${pkgIife}/runtime`;

  if (fs.existsSync(pkgRuntime)) {
    log(`开始生成 ${pkgName} 的 runtime`);
    configs.push({
      input: `${pkgRuntime}/index.js`,
      output: [rollupOutput(pkgIifeRuntime, 'index', '')],
      plugins: [esbuild()],
      external,
    });
    log(`runtime 生成结束`);
  }

  log(`开始生成 ${pkgName} 的 其他文件`);
  const theOtherFiles = fs
    .readdirSync(`${pkgLib}`)
    .filter((file) => path.extname(file) === '.js');
  theOtherFiles.forEach(async (fileFullName: string) => {
    const fileName = fileFullName.replace('.js', '');
    configs.push({
      input: `${pkgLib}/${fileFullName}`,
      output: [rollupOutput(pkgIife, fileName, '')],
      plugins: [esbuild()],
      external,
    });
  });
};

const allPackages = fs
  .readdirSync(`${pwd}/packages`)
  .filter((file) => !/\.|compiler|playground/g.test(file));

// 生成 rollup 配置集合
allPackages.forEach(renderRollupConfig);

export default configs;
