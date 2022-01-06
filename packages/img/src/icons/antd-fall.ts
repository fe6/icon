/**
 * @format
 * @file AntdFall 下跌图表
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdFallSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M47.9957363,34.3783048 L46.6044279,22.8304445 C46.5580509,22.4478347 46.0884843,22.2855154 45.8160197,22.5579799 L42.3783284,26.0014684 L26.6507457,10.2796828 C26.2855272,9.9202614 25.7000182,9.9202614 25.3405969,10.2796828 L19.4391301,16.1753524 L3.39850299,0.134725219 C3.21708902,-0.0449084063 2.92484255,-0.0449084063 2.74342859,0.134725219 L0.134725219,2.75502282 C-0.0449084063,2.93643679 -0.0449084063,3.22868326 0.134725219,3.41009722 L18.7840557,22.071022 C19.1434771,22.4362404 19.7347832,22.4362404 20.0942045,22.071022 L25.9956713,16.1753524 L39.1029564,29.2768404 L35.6652651,32.7145317 C35.5401993,32.8402169 35.4976246,33.0261528 35.5555394,33.193736 C35.6134542,33.3613191 35.7617477,33.4812932 35.9377297,33.5029398 L47.4855899,34.8942483 C47.7812429,34.9348281 48.0363162,34.6797549 47.9957363,34.3783048 Z" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('antd-fall', false, getIconAntdFallSvgHtml);
