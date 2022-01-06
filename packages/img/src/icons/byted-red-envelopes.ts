/**
 * @format
 * @file BytedRedEnvelopes byted-red-envelopes
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedRedEnvelopesSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(8.000000, 4.000000)">
      <rect stroke-linecap="${props.strokeLinecap}" x="0" y="0" width="32" height="40" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <path d="M11.7368854,16.7775148 C7.73688539,15.2066736 4,11.7624921 0,6 M32,6 C28,11.7624921 24.319097,15.3206733 20.319097,16.8915145" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <circle fill="${props.colors?.[1]}" fill-rule="nonzero" cx="16" cy="18.5" r="4.5" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-red-envelopes',
  false,
  getIconBytedRedEnvelopesSvgHtml,
);
