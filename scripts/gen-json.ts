/**
 * @format
 * @file build-icons
 * @note fork from https://github.com/bytedance/IconPark
 */

import fs from 'fs';
import path from 'path';

import { errorLog, log, pascalCase } from '../packages/compiler/src';

interface IIconProps {
  id: number;
  title: string;
  name: string;
  type: string;
  svg?: string;
  tag: string[];
  category: string;
  categoryCN: string;
  author: string;
  rtl: boolean;
}

let count = 0;

const errors: { [key: string]: boolean } = {};
const printErrorMsg = (msg: string, data?: string) => {
  errorLog(`${msg}, ${data || ''}`, true);

  if (data) {
    errors[data] = true;
  }
};

const iconNameMap: { [key: string]: boolean } = {};
const iconIdMap: { [key: string]: boolean } = {};

const ALL_ICON_MAP: { [key: string]: IIconProps } = {};

// 读取资源文件夹
fs.readdirSync(path.join(__dirname, '../source')).forEach((dir) => {
  const dirPath = path.join(__dirname, '../source', dir);
  if (fs.statSync(dirPath).isDirectory()) {
    // 读取每个 icon 文件夹
    fs.readdirSync(dirPath).forEach((childDir) => {
      const iconPath = path.join(dirPath, childDir);
      if (ALL_ICON_MAP[childDir]) {
        printErrorMsg(`图标名字(${childDir})重复`);
      }
      if (fs.statSync(iconPath).isDirectory()) {
        const iconFolder = fs.readdirSync(iconPath);
        // 读取 icon 文件夹的文件
        iconFolder.forEach((file) => {
          const filePath = path.join(iconPath, file);
          // 操作 JSON
          if (file.includes('json')) {
            ALL_ICON_MAP[childDir] = {
              ...JSON.parse(fs.readFileSync(filePath, 'utf8')),
            };
            count++;
          }
        });
        iconFolder.forEach((file) => {
          const filePath = path.join(iconPath, file);
          // 操作 SVG
          if (file.includes('svg')) {
            const childDir = path.basename(filePath, '.svg').toLowerCase();
            ALL_ICON_MAP[childDir].svg = fs.readFileSync(filePath, 'utf8');
          }
        });

        // 生成 type 供全局使用
        Object.keys(ALL_ICON_MAP).forEach((allKey: string) => {
          ALL_ICON_MAP[allKey].type = `Icon${pascalCase(
            ALL_ICON_MAP[allKey].name,
          )}`;
        });
      }
    });
  }
});

const data: IIconProps[] = [];

// icon 名字验证
const testIconName = (iName: string) => {
  if (!iconNameMap[iName]) {
    iconNameMap[iName] = true;
  } else {
    printErrorMsg('SVG 名字重复', iName);
  }
  // 非法字符
  if (/[^\da-z-]/.test(iName)) {
    printErrorMsg('SVG 命名只允许小写字母/连字符/数字', iName);
  }

  if (!/^h[1-6]$/.test(iName) && /\d/g.test(iName)) {
    printErrorMsg('SVG 命名出现数字（数字不表意，不推荐)', iName);
  }
};

// icon ID 验证
const testIconId = (iId: string) => {
  if (!iconIdMap[iId]) {
    iconIdMap[iId] = true;
  } else {
    printErrorMsg(`SVG ID( ${iId} ) 重复`, iId);
  }

  if (!/\d/g.test(iId)) {
    printErrorMsg('SVG ID 必须是数字', iId);
  }
};

// 添加到数据中
Object.keys(ALL_ICON_MAP).forEach((key) => {
  if (Object.prototype.hasOwnProperty.call(ALL_ICON_MAP, key)) {
    const dataItem = ALL_ICON_MAP[key];
    testIconName(key);
    testIconId(String(dataItem.id));
    data.push(dataItem);
    delete ALL_ICON_MAP[key];
  } else {
    printErrorMsg('SVG 路径不存在: 请检查是否缺失 SVG 或者拼写错误');
  }
});

log(`总图标数, ${count}`);

fs.writeFileSync(
  path.resolve(__dirname, '../source/icons.json'),
  JSON.stringify(data, null, 4),
  'utf8',
);
