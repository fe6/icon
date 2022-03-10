/** @format */

import fs from 'fs';
import p from 'path';
import mkdirp from 'mkdirp';

import { iconCompiler, log } from '../packages/compiler/src';
import { COMPILER_TYPE } from './config';

import icons from '../source/icons.json';

import { BUILD_CODE_CONFIG } from './code-conf';

(async () => {
  log('');
  log('开始生成 ICON');
  log('');

  COMPILER_TYPE.forEach((type) => {
    const compiler = iconCompiler({
      type,
      ...BUILD_CODE_CONFIG,
    });

    interface IIconItem {
      id: string;
      title: string;
      name: string;
      category: string;
      categoryCN: string;
      author: string;
      tag: string[];
      rtl: boolean;
      svg: string;
    }

    (icons as any).forEach((item: IIconItem) =>
      compiler.appendIcon({
        name: item.name,
        description: item.title,
        content: item.svg,
        rtl: item.rtl,
      }),
    );

    const files = compiler.getIconFiles();

    // 生成真实组件
    files.forEach(({ path, content }) => {
      const fp = p.join(__dirname, '../packages', type, 'src', path);
      mkdirp.sync(p.dirname(fp));
      fs.writeFileSync(fp, content, 'utf8');
    });
  });
})();
