/**
 * @format
 * @file BytedUpload byted-upload
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedUploadSvgHtml = (props: IIconProps) =>
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
    <path d="M6 24.0083V42H42V24" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
    <path d="M33 15L24 6L15 15" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
    <path d="M23.9917 32V6" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-upload', false, getIconBytedUploadSvgHtml);
