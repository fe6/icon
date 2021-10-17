/** @format */

import { IIconToolsOptions } from '../packages/compiler/src/icon-compiler';

export const BUILD_CODE_CONFIG: Omit<IIconToolsOptions, 'type'> = {
  author: 'fe6',
  useType: true,
  fixedSize: true,
  stroke: 4,
  strokeLinejoin: 'round',
  strokeLinecap: 'round',
  cssPrefix: 'i',
  colors: [
    {
      type: 'color',
      color: '#000',
    },
    {
      type: 'color',
      color: '#2F88FF',
    },
    {
      type: 'color',
      color: '#FFF',
    },
    {
      type: 'color',
      color: '#43CCF8',
    },
  ],
  theme: [
    {
      name: 'outline',
      fill: [
        {
          type: 'color',
          color: '#333',
          name: 'fill',
          currentColor: true,
        },
        {
          type: 'color',
          color: 'transparent',
          fixed: true,
          name: 'background',
        },
      ],
      order: [0, 1, 0, 1],
    },
    {
      name: 'filled',
      fill: [
        {
          type: 'color',
          color: '#333',
          name: 'fill',
          currentColor: true,
        },
        {
          type: 'color',
          color: '#FFF',
          fixed: true,
          name: 'background',
        },
      ],
      order: [0, 0, 1, 1],
    },
    {
      name: 'two-tone',
      fill: [
        {
          type: 'color',
          color: '#333',
          name: 'fill',
          currentColor: true,
        },
        {
          type: 'color',
          color: '#2F88FF',
          name: 'twoTone',
        },
      ],
      order: [0, 1, 0, 1],
    },
    {
      name: 'multi-color',
      fill: [
        {
          type: 'color',
          color: '#333',
          name: 'outStrokeColor',
          currentColor: true,
        },
        {
          type: 'color',
          color: '#2F88FF',
          name: 'outFillColor',
        },
        {
          type: 'color',
          color: '#FFF',
          name: 'innerStrokeColor',
        },
        {
          type: 'color',
          color: '#43CCF8',
          name: 'innerFillColor',
        },
      ],
      order: [0, 1, 2, 3],
    },
  ],
};
