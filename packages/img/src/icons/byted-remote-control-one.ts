/**
 * @format
 * @file BytedRemoteControlOne byted-remote-control-one
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedRemoteControlOneSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M11 5.44578C11 4.6473 11.6473 4 12.4458 4H35.5542C36.3527 4 37 4.6473 37 5.44578V31C37 38.1797 31.1797 44 24 44V44C16.8203 44 11 38.1797 11 31V5.44578Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <path d="M17 16H20" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M28 16H31" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="17" cy="10" r="2" fill="${props.colors?.[0]}"/>
  <circle cx="24" cy="31" r="7" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-remote-control-one',
  false,
  getIconBytedRemoteControlOneSvgHtml,
);
