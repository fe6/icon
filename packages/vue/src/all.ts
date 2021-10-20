/**
 * @format
 * @file map 所有组件出口
 * @author 由 fe6 自动生成
 */

import type { App, DefineComponent, ComponentOptions } from '@vue/runtime-dom';
import { createVNode } from '@vue/runtime-dom';
import * as mapIcon from './map';
import { IIconProps } from './runtime';

export type IconType = keyof typeof mapIcon;

export interface IIconAllProps extends IIconProps {
  type: IconType | string;
}

export type IIconAllOptions = ComponentOptions<IIconAllProps>;
// 包裹后的图标
export type TAllIcon = DefineComponent<IIconAllProps>;

const toPascalCase = (val: string): string => {
  return val.replace(/(^w|-w)/g, (c) => c.slice(-1).toUpperCase());
};

const IIconWaterOptions: IIconAllOptions = {
  name: 'water-icon',
  props: [
    'size',
    'strokeWidth',
    'strokeLinecap',
    'strokeLinejoin',
    'theme',
    'fill',
    'colors',
    'spin',
    'type',
  ],
  setup: (props) => {
    const type = toPascalCase(props.type);
    const {
      size,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      theme,
      fill,
      colors,
      spin,
    } = props;

    if (!(type in mapIcon)) {
      throw new Error(`${type} is not a valid icon type name`);
    }

    return () =>
      createVNode(mapIcon[type as IconType], {
        size,
        strokeWidth,
        strokeLinecap,
        strokeLinejoin,
        theme,
        fill,
        colors,
        spin,
      });
  },
};

export const WaterIcon: TAllIcon = IIconWaterOptions as TAllIcon;

export const waterIconInstall = (Vue: App, prefix?: string): void => {
  Object.values(mapIcon).forEach((icon) => {
    if (icon.name) {
      Vue.component(
        prefix ? `${prefix}-${icon.name.slice(5)}` : icon.name,
        icon,
      );
    }
  });
};
