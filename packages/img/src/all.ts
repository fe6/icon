/**
 * @format
 * @file all 所有组件出口
 * @author 由 fe6 自动生成
 */

import * as IconMap from './map';
import { ISvgIconProps } from './runtime';

export type IconType = keyof typeof IconMap;

export interface IIconAllProps extends ISvgIconProps {
  type: IconType | string;
}

export const waterIcon = (props: IIconAllProps) => {
  return IconMap[props.type as IconType](props);
};
