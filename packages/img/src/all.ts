/**
 * @format
 * @file all 所有组件出口
 * @author 由 fe6 自动生成
 */

import * as IconMap from './map';
import { IIconProps } from './runtime';

export type IconType = keyof typeof IconMap;

export interface IIconAllProps extends IIconProps {
  type: IconType | string;
}

export const iconKeg = (props: IIconAllProps) => {
  return IconMap[props.type as IconType](props);
};
