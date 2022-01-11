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
  <path fill="${props.colors?.[0]}" d="M20,43.6853933 C20,46.0682848 21.9317152,48 24.3146067,48 C26.6974982,48 28.6292135,46.0682848 28.6292135,43.6853933 C28.6292135,41.3025018 26.6974982,39.3707865 24.3146067,39.3707865 C21.9317152,39.3707865 20,41.3025018 20,43.6853933 Z M22.1573034,32.3595506 L26.4719101,32.3595506 C26.7685393,32.3595506 27.011236,32.1168539 27.011236,31.8202247 L27.011236,0.539325843 C27.011236,0.242696629 26.7685393,0 26.4719101,0 L22.1573034,0 C21.8606742,0 21.6179775,0.242696629 21.6179775,0.539325843 L21.6179775,31.8202247 C21.6179775,32.1168539 21.8606742,32.3595506 22.1573034,32.3595506 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-exclamation',
  false,
  getIconAntdExclamationSvgHtml,
);
