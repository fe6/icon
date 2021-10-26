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
      color: '#2f88ff',
    },
    {
      type: 'color',
      color: '#fff',
    },
    {
      type: 'color',
      color: '#43ccf8',
    },
  ],
  theme: [
    {
      name: 'outline',
      fill: [
        {
          type: 'color',
          color: '#333',
          name: 'outStrokeColor',
          // currentColor: true,
        },
        {
          type: 'color',
          color: 'transparent',
          fixed: true,
          name: 'outFillColor',
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
          name: 'outStrokeColor',
          // currentColor: true,
        },
        {
          type: 'color',
          color: '#fff',
          fixed: true,
          name: 'outFillColor',
        },
      ],
      order: [0, 0, 1, 1],
    },
    {
      name: 'twoTone',
      fill: [
        {
          type: 'color',
          color: '#333',
          name: 'outStrokeColor',
          // currentColor: true,
        },
        {
          type: 'color',
          color: '#2f88ff',
          name: 'outFillColor',
        },
      ],
      order: [0, 1, 0, 1],
    },
    {
      name: 'multiColor',
      fill: [
        {
          type: 'color',
          color: '#333',
          name: 'outStrokeColor',
          // currentColor: true,
        },
        {
          type: 'color',
          color: '#2f88ff',
          name: 'outFillColor',
        },
        {
          type: 'color',
          color: '#fff',
          name: 'innerStrokeColor',
        },
        {
          type: 'color',
          color: '#43ccf8',
          name: 'innerFillColor',
        },
      ],
      order: [0, 1, 2, 3],
    },
  ],
};
