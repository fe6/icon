/** @format */

import icons from '../source/icons.json';
import { log } from '../packages/compiler/src';

const idGroup = icons.map(({ id }) => id);
const typeGroup = {};

idGroup.forEach((idItem: string) => {
  const idSpace = idItem.split('-');

  if (idSpace.length) {
    const curType = idSpace[0];

    if (!(curType in typeGroup)) {
      typeGroup[curType] = 0;
    }

    typeGroup[curType]++;
  }
});

log(`图标总数： ${idGroup.length}`);

log('');
Object.keys(typeGroup).forEach((tKey: string) => {
  const nowIdNumber = typeGroup[tKey];
  log(`${tKey}： ${nowIdNumber} , 下一个 ID 是 ${nowIdNumber + 1}`);
  log('');
});
