/**
 * @format
 * @file BytedPin byted-pin
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedPinSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${
    props.size
  }" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="${`url(#${props.id}img0)`}">
    <path d="M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z" fill="${
      props.colors?.[1]
    }" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linejoin="${props.strokeLinejoin}"/>
  </g>;
  <defs/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-pin', false, getIconBytedPinSvgHtml);
