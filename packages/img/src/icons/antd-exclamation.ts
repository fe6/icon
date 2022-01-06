/**
 * @format
 * @file AntdExclamation 感叹号
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdExclamationSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill="${props.colors?.[0]}" d="M0,43.6853933 C0,46.0682848 1.93171524,48 4.31460674,48 C6.69749825,48 8.62921348,46.0682848 8.62921348,43.6853933 C8.62921348,41.3025018 6.69749825,39.3707865 4.31460674,39.3707865 C1.93171524,39.3707865 0,41.3025018 0,43.6853933 Z M2.15730337,32.3595506 L6.47191011,32.3595506 C6.76853933,32.3595506 7.01123596,32.1168539 7.01123596,31.8202247 L7.01123596,0.539325843 C7.01123596,0.242696629 6.76853933,0 6.47191011,0 L2.15730337,0 C1.86067416,0 1.61797753,0.242696629 1.61797753,0.539325843 L1.61797753,31.8202247 C1.61797753,32.1168539 1.86067416,32.3595506 2.15730337,32.3595506 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-exclamation',
  false,
  getIconAntdExclamationSvgHtml,
);
