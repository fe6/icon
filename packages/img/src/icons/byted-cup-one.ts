/**
 * @format
 * @file BytedCupOne byted-cup-one
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedCupOneSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 17C10 17 36 17 38 17C40 17 44 17 44 20C44 23 40 23 38 23V41C38 42.1046 37.1046 43 36 43H12C10.8954 43 10 42.1046 10 41V23C8 23 4 23 4 20C4 17 8 17 10 17Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M41 17C41 11.1271 35.4587 9.31869 28 8V6C28 4.89543 27.1046 4 26 4H22C20.8954 4 20 4.89543 20 6V8C12.5413 9.31869 7 11.1271 7 17" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-cup-one', false, getIconBytedCupOneSvgHtml);
