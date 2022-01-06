/**
 * @format
 * @file BytedWashingMachine byted-washing-machine
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedWashingMachineSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <rect x="8" y="4" width="32" height="40" rx="2" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <path d="M8 15.5H40" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="28" cy="10" r="2" fill="${props.colors?.[0]}"/>
  <circle cx="34" cy="10" r="2" fill="${props.colors?.[0]}"/>
  <circle cx="24" cy="30" r="7" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-washing-machine',
  false,
  getIconBytedWashingMachineSvgHtml,
);
