/**
 * @format
 * @file BytedTrapezoid byted-trapezoid
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedTrapezoidSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31.7944 8H16.2056C14.8934 8 13.7335 8.85275 13.3421 10.1052L5.21713 36.1052C4.61345 38.037 6.05665 40 8.08057 40H39.9194C41.9433 40 43.3866 38.037 42.7829 36.1052L34.6579 10.1052C34.2665 8.85275 33.1066 8 31.7944 8Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-trapezoid',
  false,
  getIconBytedTrapezoidSvgHtml,
);
