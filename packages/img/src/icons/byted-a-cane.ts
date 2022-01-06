/**
 * @format
 * @file BytedACane byted-a-cane
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedACaneSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${
    props.size
  }" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="${`url(#${props.id}img0)`}">
    <path d="M19.5571 44.7684C19.5571 44.7684 32.4675 20.4873 33.6412 18.28C34.8149 16.0726 37.453 8.98102 30.3894 5.22524C23.3258 1.46947 19.1566 7.18063 17.7482 9.82948" stroke="${
      props.colors?.[0]
    }" stroke-width="${props.strokeWidth}" stroke-linecap="${
    props.strokeLinecap
  }" stroke-linejoin="${props.strokeLinejoin}"/>
  </g>;
  <defs/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-a-cane', false, getIconBytedACaneSvgHtml);
