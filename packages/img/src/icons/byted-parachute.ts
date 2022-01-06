/**
 * @format
 * @file BytedParachute byted-parachute
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedParachuteSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(4.000000, 4.000000)">
      <path d="M12.7272727,20 C15.1515152,17.5757576 17.5757576,16.3636364 20,16.3636364 C22.4242424,16.3636364 24.8484848,17.5757576 27.2727273,20 C30.1010101,17.5757576 32.2222222,16.3636364 33.6363636,16.3636364 C35.0505051,16.3636364 37.1717172,17.5757576 40,20 C40,8.954305 31.045695,0 20,0 C8.954305,0 0,8.954305 0,20 C2.82828283,17.5757576 4.94949495,16.3636364 6.36363636,16.3636364 C7.77777778,16.3636364 9.8989899,17.5757576 12.7272727,20 Z" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <polyline stroke-linecap="${props.strokeLinecap}" points="0 20 20 40 12.7272727 20" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <polyline stroke-linecap="${props.strokeLinecap}" points="27.2727273 20 20 40 40 20" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-parachute',
  false,
  getIconBytedParachuteSvgHtml,
);
