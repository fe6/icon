/**
 * @format
 * @file BytedOne byted-one
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedOneSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 40L6.9395 31.2023C5.84497 28.8308 6.76016 26.0164 9.04019 24.7422L20.2971 18.4516C21.3325 17.873 22.6117 17.9588 23.5606 18.6704L24.587 19.4403C25.2089 19.9067 26.1018 19.5164 26.1817 18.7432L27.3708 7.24931C27.4534 6.45005 27.8533 5.71736 28.4808 5.2154L28.6963 5.04293C29.4385 4.44919 30.5084 4.50844 31.1805 5.18051C31.7052 5.70522 32 6.41688 32 7.15893V29.4194C32 30.2579 32.9695 30.7244 33.6243 30.2006L37 27.5C38.6529 26.1777 40.8749 27.041 42.255 27.945C42.6936 28.2323 42.7587 28.8265 42.447 29.2482L34.5 40C34.5 40 31 44 23 44C15 44 11.6667 41.3333 11 40Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-one', false, getIconBytedOneSvgHtml);
