/**
 * @file build-icons
 * @note fork from https://github.com/bytedance/IconPark
 */

import fs from 'fs';
import path from 'path';

interface IIconProps {
    id: number;
    title: string;
    name: string;
    svg?: string;
    tag: string[];
    category: string;
    categoryCN: string;
    author: string;
    rtl: boolean;
}

let count = 0;

let errors: {[key: string]: boolean} = {};
const printErrorMsg = (msg: string, data?: string) => {
  console.log('[water icon ci]:', msg, data || '');
  if (data) {
    errors[data] = true;
  }
};

const iconNameMap: {[key: string]: boolean} = {};
const iconIdMap: {[key: string]: boolean} = {};

const ALL_ICON_MAP: {[key: string]: IIconProps} = {};

// 读取资源文件夹
fs.readdirSync(path.join(__dirname, '../source')).forEach(dir => {
  const dirPath = path.join(__dirname, `../source`, dir);
  if (fs.statSync(dirPath).isDirectory()) {
    // 读取每个 icon 文件夹
    fs.readdirSync(dirPath).forEach((childDir) => {
      const iconPath = path.join(dirPath, childDir);
      if (ALL_ICON_MAP[childDir]) {
        console.log('图标名字重复：', childDir);
      }
      if (fs.statSync(iconPath).isDirectory()) {
        const iconFolder = fs.readdirSync(iconPath);
        // 读取 icon 文件夹的文件
        iconFolder.forEach((file) => {
          const filePath = path.join(iconPath, file);
          // 操作 JSON
          if (file.indexOf('json') > -1) {
            ALL_ICON_MAP[childDir] = {
              ...JSON.parse(fs.readFileSync(filePath, 'utf8')),
            }
            count++;
          }
        });
        iconFolder.forEach((file) => {
          const filePath = path.join(iconPath, file);
          // 操作 SVG
          if (file.indexOf('svg') > -1) {
            const childDir = path.basename(filePath, '.svg').toLowerCase();
            ALL_ICON_MAP[childDir].svg = fs.readFileSync(filePath, 'utf8');
          }
        });
      }
    });
  }
  // console.log(ALL_ICON_MAP, 'ALL_ICON_MAP');
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
}

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
}

// 添加到数据中
for (const key in ALL_ICON_MAP) {
  if (Object.prototype.hasOwnProperty.call(ALL_ICON_MAP, key)) {
    const dataItem = ALL_ICON_MAP[key];
    console.log(key, 'dataItem');
    testIconName(key);
    testIconId(String(dataItem.id))
    data.push(dataItem);
    delete ALL_ICON_MAP[key];
  } else {
    printErrorMsg('SVG 路径不存在: 请检查是否缺失 SVG 或者拼写错误');
  }
}

fs.writeFileSync(path.resolve(__dirname, '../source/icons.json'), JSON.stringify(data, null, 4), 'utf8');
