/** @format */

import fs from 'fs';
import p from 'path';
import mkdirp from 'mkdirp';

import { iconCompiler, TGenType } from '../packages/compiler/src/index';
import icons from '../source/icons.json';

import { BUILD_CODE_CONFIG } from './code-conf';

const compilerType: TGenType[] = ['vue', 'img'];

compilerType.forEach((type) => {
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

  icons.forEach((item: IIconItem) =>
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
