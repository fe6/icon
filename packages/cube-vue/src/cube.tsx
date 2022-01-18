/**
 * @format
 * @file cube 自定义组件出口
 * @author 由 fe6 自动生成
 */

import { defineCustomElement } from '@vue/runtime-dom';

import cubeStyle from './cube-style';
import {
  IIconProps,
  IIconCubeItemData,
  IconWrapperCustomer,
  getSvgItem,
  getSvgProp,
} from './runtime';

export interface IIconCustomData {
  [key: number | string]: IIconCubeItemData;
}

// 正则 数据中的默认颜色 替换
const reColors: string[] = ['#333', '#2f88ff', '#fff', '#43ccf8'];

// 获取 SVG 内容
export const cubeGetContent = (props: IIconProps): string => {
  if (!props.id) {
    return '';
  }
  const svgItem: IIconCubeItemData | null = getSvgItem(String(props.id));

  if (!svgItem) {
    return '';
  }

  const { size, colors, strokeLinejoin, strokeLinecap, strokeWidth } = props;

  const canSet = getSvgProp(svgItem, 'canSet', 'Boolean', false, true);
  const viewBox = getSvgProp(svgItem, 'viewBox', 'String', canSet, '0 0 48 48');
  let originSvg = getSvgProp(svgItem, 'content', 'String', canSet, '');

  originSvg = originSvg.replace(
    /viewBox="\d{0,} \d{0,} \d{0,} \d{0,}"/,
    `viewBox="${viewBox}"`,
  );
  originSvg = originSvg.replace(/width="\d{0,}\w{2,3}"/, `width="${size}"`);
  originSvg = originSvg.replace(/height="\d{0,}\w{2,3}"/, `height="${size}"`);

  let contentHtml = svgItem ? originSvg : '';

  if (colors) {
    colors.forEach((colorItem: string, colorIdx: number) => {
      contentHtml = contentHtml.replace(
        new RegExp(
          `${reColors[colorIdx]}|${reColors[colorIdx].toUpperCase()}`,
          'g',
        ),
        colorItem,
      );
    });
  }

  contentHtml = contentHtml.replace(
    /stroke-linejoin="round"/g,
    `stroke-linejoin="${strokeLinejoin}"`,
  );
  contentHtml = contentHtml.replace(
    /stroke-linecap="round"/g,
    `stroke-linecap="${strokeLinecap}"`,
  );
  contentHtml = contentHtml.replace(
    /stroke-width="4"/g,
    `stroke-width="${strokeWidth}"`,
  );

  return contentHtml;
};

const name = 'cube';
// 声明 cube 组件
export const CubeVueOptions = defineCustomElement({
  ...IconWrapperCustomer(name, false, (props: IIconProps): string => {
    return cubeGetContent(props);
  }),
  styles: [cubeStyle],
});

if (
  customElements &&
  typeof customElements.define === 'function' &&
  !customElements.get(`icon-${name}`)
) {
  customElements.define(`icon-${name}`, CubeVueOptions);
}
