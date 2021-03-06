/**
 * @format
 * @file BytedUmbrellaOne byted-umbrella-one
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedUmbrellaOneSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <g>
      <rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
      <path d="M44,24 C44,12.954305 35.045695,4 24,4 C12.954305,4 4,12.954305 4,24 L44,24 Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}"/>
      <path d="M24,24 L24,38.5536268 C24,41.5677816 26.4858452,44.0112369 29.5,44.0112369 C32.5141548,44.0112369 35,41.5677816 35,38.5536268" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-umbrella-one',
  false,
  getIconBytedUmbrellaOneSvgHtml,
);
