/**
 * @format
 * @file BytedParallelogram byted-parallelogram
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedParallelogramSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M41.2796 8H15.4704C14.5956 8 13.8223 8.5685 13.5614 9.40345L4.81142 37.4035C4.40897 38.6913 5.3711 40 6.72038 40H32.5296C33.4044 40 34.1777 39.4315 34.4386 38.5965L43.1886 10.5965C43.591 9.30869 42.6289 8 41.2796 8Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-parallelogram',
  false,
  getIconBytedParallelogramSvgHtml,
);
