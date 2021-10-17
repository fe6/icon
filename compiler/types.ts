/**
 * @format
 * @file types 类型定义
 */

export enum SvgShapeAttr {
  CONST = 'const',
  DYNAMIC = 'dynamic',
}
export enum SvgStyleType {
  Keyframes = 'Keyframes',
  Rule = 'Rule',
}
export type TTransfromInnerOptionsBase =
  | ISvgAttr
  | ISvgInlineStyleAttr
  | ISvgStyleAttr;
export type TTransfromInnerBase =
  | ISvgAttr
  | ISvgInlineStyleAttr
  | ISvgStyleAttr
  | null;
export enum SvgStyleSelectorType {
  ID = 'ID',
  CLASS = 'CLASS',
  TAG = 'TAG',
  ATTR = 'ATTR',
  CHILD = 'CHILD',
  PSEUDO = 'PSEUDO',
  NOT = 'NOT',
  IDENTIFIER = 'IDENTIFIER',
}
export interface ISvgAttr {
  name: string;
  type: SvgShapeAttr;
  expression: string;
  owner: ISvgElementInfo;
}
export interface ISvgStyleAttr {
  name: string;
  type: SvgShapeAttr;
  expression: string;
  owner: ISvgStyleRuleInfo;
}
export interface ISvgInlineStyleAttr {
  name: string;
  type: SvgShapeAttr;
  expression: string;
  owner: ISvgElementInfo;
}
export interface ISvgStyleSelector {
  selectorType: SvgStyleSelectorType;
  type: SvgShapeAttr;
  expression: string;
  children: ISvgStyleSelector[];
}
export interface ISvgStyleKeyframesInfo {
  styleType: SvgStyleType.Keyframes;
  type: SvgShapeAttr;
  name: string;
  selector: ISvgStyleSelector;
  rules: ISvgStyleRuleInfo[];
}
export interface ISvgStyleRuleInfo {
  styleType: SvgStyleType.Rule;
  type: SvgShapeAttr;
  selector: ISvgStyleSelector[][];
  attrs: ISvgStyleAttr[];
}
export interface ISvgElementInfo {
  type: SvgTags;
  attrs: ISvgAttr[];
  style: ISvgInlineStyleAttr[];
  children: ISvgElementInfo[];
  parent: ISvgElementInfo | null;
}
export interface ISvgStyleInfo {
  rules: ISvgStyleRuleInfo[];
  keyframes: ISvgStyleKeyframesInfo[];
}
export interface ISvgInfo {
  element: ISvgElementInfo;
  style: ISvgStyleInfo;
}
export declare type SvgTags =
  | 'svg'
  | 'animate'
  | 'animateMotion'
  | 'animateTransform'
  | 'circle'
  | 'clipPath'
  | 'defs'
  | 'desc'
  | 'ellipse'
  | 'feBlend'
  | 'feColorMatrix'
  | 'feComponentTransfer'
  | 'feComposite'
  | 'feConvolveMatrix'
  | 'feDiffuseLighting'
  | 'feDisplacementMap'
  | 'feDistantLight'
  | 'feDropShadow'
  | 'feFlood'
  | 'feFuncA'
  | 'feFuncB'
  | 'feFuncG'
  | 'feFuncR'
  | 'feGaussianBlur'
  | 'feImage'
  | 'feMerge'
  | 'feMergeNode'
  | 'feMorphology'
  | 'feOffset'
  | 'fePointLight'
  | 'feSpecularLighting'
  | 'feSpotLight'
  | 'feTile'
  | 'feTurbulence'
  | 'filter'
  | 'foreignObject'
  | 'g'
  | 'image'
  | 'line'
  | 'linearGradient'
  | 'marker'
  | 'mask'
  | 'metadata'
  | 'mpath'
  | 'path'
  | 'pattern'
  | 'polygon'
  | 'polyline'
  | 'radialGradient'
  | 'rect'
  | 'stop'
  | 'switch'
  | 'symbol'
  | 'text'
  | 'textPath'
  | 'tspan'
  | 'use'
  | 'view';
export interface IReplaceIdTransformerOptions {
  [key: string]: {
    newId: string;
    propName: string;
    used: boolean;
  };
}

// runtime start
export interface IIconColorHueInfo {
  type: 'hue';
  hue: number;
  saturation: number;
  light: number;
}
export interface IIconColorReplaceInfo {
  type: 'color';
  color: string;
}
export declare type IIconColorInfo = IIconColorHueInfo | IIconColorReplaceInfo;
export interface IThemeColorHue extends IIconColorHueInfo {
  name: string;
  fixed?: boolean;
}
export interface IThemeColorReplace extends IIconColorReplaceInfo {
  name: string;
  fixed?: boolean;
  currentColor?: boolean;
}
export declare type IThemeColor = IThemeColorReplace | IThemeColorHue;
export interface IIconThemeInfo {
  name: string;
  fill: IThemeColor[];
  order: number[];
}
export declare type StrokeLinecap = 'butt' | 'round' | 'square';
export declare type StrokeLinejoin = 'miter' | 'round' | 'bevel';
// runtime end
