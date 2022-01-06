/**
 * @format
 * @file BytedTray byted-tray
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedTraySvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${
    props.size
  }" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="${`url(#${props.id}img0)`}">
    <rect x="24.7588" y="3.24265" width="28" height="30" rx="2" transform="rotate(45 24.7588 3.24265)" fill="${
      props.colors?.[1]
    }" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
    <path d="M38.1937 16.6777L42.4363 12.435L35.3652 5.36395L31.1226 9.60659" stroke="${
      props.colors?.[0]
    }" stroke-width="${props.strokeWidth}" stroke-linecap="${
    props.strokeLinecap
  }" stroke-linejoin="${props.strokeLinejoin}"/>
    <path d="M18 21H30" stroke="${props.colors?.[2]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
    <path d="M18 27H22" stroke="${props.colors?.[2]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
    <path d="M28 27H30" stroke="${props.colors?.[2]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
  </g>;
  <defs/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-tray', false, getIconBytedTraySvgHtml);
