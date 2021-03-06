/**
 * @format
 * @file BytedCreative byted-creative
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedCreativeSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M42 39V9.00003C42 7.34317 40.6569 6.00003 39 6.00003L9.00001 6C7.34315 6 6 7.34315 6.00001 9.00001L6.00007 39C6.00007 40.6569 7.34321 42 9.00006 42H39C40.6569 42 42 40.6569 42 39Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M23.9994 18.3158L21.1038 24.2263L14.5264 25.18L19.2911 29.8382L18.1521 36.3158L23.9994 33.1986L29.8479 36.3158L28.7173 29.8382L33.4737 25.18L26.9328 24.2263L23.9994 18.3158Z" fill="${props.colors?.[3]}" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M18.3158 12.6316H29.6842" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-creative',
  false,
  getIconBytedCreativeSvgHtml,
);
