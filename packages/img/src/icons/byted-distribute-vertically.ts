/**
 * @format
 * @file BytedDistributeVertically byted-distribute-vertically
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedDistributeVerticallySvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${
    props.size
  }" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <mask id="${
    props.id + 'img0'
  }" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48" style="mask-type: alpha">
    <rect width="48" height="48" fill="${props.colors?.[2]}"/>
  </mask>;
  <g mask="${`url(#${props.id}img0)`}">
    <rect x="38" y="30" width="28" height="12" transform="rotate(180 38 30)" fill="${
      props.colors?.[1]
    }" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linejoin="${props.strokeLinejoin}"/>
    <path d="M42 40H6" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
    <path d="M42 8L6 8" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-distribute-vertically',
  false,
  getIconBytedDistributeVerticallySvgHtml,
);
