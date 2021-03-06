/**
 * @format
 * @file BytedThermometer byted-thermometer
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedThermometerSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(14.000000, 6.000000)">
      <path d="M4,19.9992676 L4,4 C4,0.686291501 6.6862915,-2 10,-2 C13.3137085,-2 16,0.686291501 16,4 L16,19.9992676 C18.4288934,21.8236803 20,24.7283643 20,28 C20,33.5228475 15.5228475,38 10,38 C4.4771525,38 0,33.5228475 0,28 C0,24.7283643 1.5711066,21.8236803 4,19.9992676 Z" stroke="${props.colors?.[0]}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}"/>
      <path d="M10,11 L10,24" stroke="${props.colors?.[2]}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      <circle stroke="${props.colors?.[2]}" fill="${props.colors?.[3]}" fill-rule="nonzero" cx="10" cy="28" r="4" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-thermometer',
  false,
  getIconBytedThermometerSvgHtml,
);
