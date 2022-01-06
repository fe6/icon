/**
 * @format
 * @file BytedNintendoSwitch byted-nintendo-switch
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedNintendoSwitchSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M6 18C6 12.3431 6 9.51472 7.75736 7.75736C9.51472 6 12.3431 6 18 6H20V42H18C12.3431 42 9.51472 42 7.75736 40.2426C6 38.4853 6 35.6569 6 30V18Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M42 18C42 12.3431 42 9.51472 40.2426 7.75736C38.4853 6 35.6569 6 30 6H28V42H30C35.6569 42 38.4853 42 40.2426 40.2426C42 38.4853 42 35.6569 42 30V18Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M35 13L35 15" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M13 33L13 35" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-nintendo-switch',
  false,
  getIconBytedNintendoSwitchSvgHtml,
);
