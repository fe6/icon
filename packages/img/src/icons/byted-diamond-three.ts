/**
 * @format
 * @file BytedDiamondThree byted-diamond-three
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedDiamondThreeSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.41421 22.5858L22.5858 5.41421C23.3668 4.63317 24.6332 4.63316 25.4142 5.41421L42.5858 22.5858C43.3668 23.3668 43.3668 24.6332 42.5858 25.4142L25.4142 42.5858C24.6332 43.3668 23.3668 43.3668 22.5858 42.5858L5.41421 25.4142C4.63317 24.6332 4.63316 23.3668 5.41421 22.5858Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-diamond-three',
  false,
  getIconBytedDiamondThreeSvgHtml,
);
