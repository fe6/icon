/**
 * @format
 * @file BytedDescend byted-descend
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedDescendSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${
    props.size
  }" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="${`url(#${props.id}img0)`}">
    <path d="M11.549 16.6253L13.0129 11.161C13.0129 11.161 8.21885 12.3128 5.91213 14.0184C3.6054 15.7239 3.25986 19.4167 5.98653 20.9909C8.7132 22.5651 44.1733 39.9362 44.1733 39.9362L41.4054 31.142L11.549 16.6253Z" fill="${
      props.colors?.[1]
    }" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
    <path d="M20 35L26 38" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
    <path d="M29 25L26 9L22 7L19 20" stroke="${
      props.colors?.[0]
    }" stroke-width="${props.strokeWidth}" stroke-linecap="${
    props.strokeLinecap
  }" stroke-linejoin="${props.strokeLinejoin}"/>
  </g>;
  <defs/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-descend', false, getIconBytedDescendSvgHtml);
