/** @format */

// 每个 source/byted 的 icon 新增 json

import fs from 'fs';
import path from 'path';

const cnGroup = {
  abstract: '抽象',
  arrows: '方向',
  base: '基础',
  books: '书籍',
  brand: '品牌',
  build: '建筑',
  character: '符号',
  charts: '图表',
  child: '儿童',
  clothes: '服饰',
  communicate: '交流',
  connect: '连接',
  datas: '数据库',
  edit: '编辑',
  emoji: '表情',
  foods: '餐饮',
  graphics: '图形',
  hands: '手势',
  hardware: '硬件',
  health: '健康',
  industry: '工业',
  life: '家居',
  makeups: '美妆',
  money: '钱财',
  music: '声音',
  office: '办公',
  operate: '操作',
  others: '其它',
  peoples: '人群',
  sports: '运动',
  time: '时间',
  travel: '旅行',
  weather: '天气',
};

fs.readdirSync(path.join(__dirname, '../source/byted')).forEach((dir) => {
  const dirPath = path.join(__dirname, '../source/byted', dir);
  if (fs.statSync(dirPath).isDirectory()) {
    // 读取每个 icon 文件夹
    fs.readdirSync(dirPath)
      .filter((dpItem: string) => !/.DS_Store|README.md/.test(dpItem))
      .forEach((childDir) => {
        const iconPath = path.join(dirPath, childDir);
        const category = dir.toLocaleLowerCase();
        fs.writeFileSync(
          path.resolve(iconPath, 'info.json'),
          JSON.stringify(
            {
              id: `byted-${childDir}`,
              title: `byted-${childDir}`,
              name: childDir,
              category,
              categoryCN: cnGroup?.[category] || '',
              author: '李梦龙',
              tag: [childDir, `byted-${childDir}`],
              rtl: false,
            },
            null,
            2,
          ),
          'utf8',
        );
      });
  }
});
