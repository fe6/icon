/** @format */

export interface ILessConfig {
  type: 'writeLine' | 'write' | 'indent';
  text: string | number;
}

export default (cssClassName: string): ILessConfig[] => {
  return [
    {
      type: 'write',
      text: `.${cssClassName}{`,
    },
    {
      type: 'write',
      text: 'display:inline-block;',
    },
    {
      type: 'write',
      text: 'color:inherit;',
    },
    {
      type: 'write',
      text: 'font-style:normal;',
    },
    {
      type: 'write',
      text: 'line-height:0;',
    },
    {
      type: 'write',
      text: 'text-align:center;',
    },
    {
      type: 'write',
      text: 'text-transform:none;',
    },
    {
      type: 'write',
      text: 'vertical-align:-0.125em;',
    },
    {
      type: 'write',
      text: 'text-rendering:optimizeLegibility;',
    },
    {
      type: 'write',
      text: '-webkit-font-smoothing:antialiased;',
    },
    {
      type: 'write',
      text: '-moz-osx-font-smoothing:grayscale;}',
    },
    {
      type: 'write',
      text: `.${cssClassName}-spin svg,.${cssClassName}-spin img,.${cssClassName}-spin-img {`,
    },
    {
      type: 'write',
      text: `animation:${cssClassName}-spin 1s infinite linear;`,
    },
    {
      type: 'write',
      text: '}',
    },
    {
      type: 'write',
      text: `.${cssClassName}-rtl{`,
    },
    {
      type: 'write',
      text: 'transform:scaleX(-1);}',
    },
    {
      type: 'write',
      text: `@keyframes ${cssClassName}-spin{`,
    },
    {
      type: 'write',
      text: '100%{',
    },
    {
      type: 'write',
      text: '-webkit-transform:rotate(360deg);',
    },
    {
      type: 'write',
      text: 'transform:rotate(360deg)}}',
    },
    {
      type: 'write',
      text: `@-webkit-keyframes ${cssClassName}-spin{`,
    },
    {
      type: 'write',
      text: '100%{',
    },
    {
      type: 'write',
      text: '-webkit-transform:rotate(360deg);',
    },
    {
      type: 'write',
      text: 'transform:rotate(360deg)',
    },
    {
      type: 'write',
      text: '}}',
    },
  ];
};
