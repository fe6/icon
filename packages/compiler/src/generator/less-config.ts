/** @format */

export interface ILessConfig {
  type: 'writeLine' | 'indent';
  text: string | number;
}

export default (cssClassName: string): ILessConfig[] => {
  return [
    {
      type: 'writeLine',
      text: `.${cssClassName} {`,
    },
    {
      type: 'indent',
      text: 1,
    },
    {
      type: 'writeLine',
      text: 'display: inline-block;',
    },
    {
      type: 'writeLine',
      text: 'color: inherit;',
    },
    {
      type: 'writeLine',
      text: 'font-style: normal;',
    },
    {
      type: 'writeLine',
      text: 'line-height: 0;',
    },
    {
      type: 'writeLine',
      text: 'text-align: center;',
    },
    {
      type: 'writeLine',
      text: 'text-transform: none;',
    },
    {
      type: 'writeLine',
      text: 'vertical-align: -0.125em;',
    },
    {
      type: 'writeLine',
      text: 'text-rendering: optimizeLegibility;',
    },
    {
      type: 'writeLine',
      text: '-webkit-font-smoothing: antialiased;',
    },
    {
      type: 'writeLine',
      text: '-moz-osx-font-smoothing: grayscale;',
    },
    {
      type: 'indent',
      text: -1,
    },
    {
      type: 'writeLine',
      text: '}',
    },
    {
      type: 'writeLine',
      text: '',
    },
    {
      type: 'writeLine',
      text: `.${cssClassName}-spin svg {`,
    },
    {
      type: 'indent',
      text: 1,
    },
    {
      type: 'writeLine',
      text: `animation: ${cssClassName}-spin 1s infinite linear;`,
    },
    {
      type: 'indent',
      text: -1,
    },
    {
      type: 'writeLine',
      text: '}',
    },
    {
      type: 'writeLine',
      text: '',
    },
    {
      type: 'writeLine',
      text: `.${cssClassName}-rtl {`,
    },
    {
      type: 'indent',
      text: 1,
    },
    {
      type: 'writeLine',
      text: 'transform: scaleX(-1);',
    },
    {
      type: 'indent',
      text: -1,
    },
    {
      type: 'writeLine',
      text: '}',
    },
    {
      type: 'writeLine',
      text: '',
    },
    {
      type: 'writeLine',
      text: `@keyframes ${cssClassName}-spin {`,
    },
    {
      type: 'indent',
      text: 1,
    },
    {
      type: 'writeLine',
      text: '100% {',
    },
    {
      type: 'indent',
      text: 1,
    },
    {
      type: 'writeLine',
      text: '-webkit-transform: rotate(360deg);',
    },
    {
      type: 'writeLine',
      text: 'transform: rotate(360deg)',
    },
    {
      type: 'indent',
      text: -1,
    },
    {
      type: 'writeLine',
      text: '}',
    },
    {
      type: 'indent',
      text: -1,
    },
    {
      type: 'writeLine',
      text: '}',
    },
    {
      type: 'writeLine',
      text: '',
    },
    {
      type: 'writeLine',
      text: `@-webkit-keyframes ${cssClassName}-spin {`,
    },
    {
      type: 'indent',
      text: 1,
    },
    {
      type: 'writeLine',
      text: '100% {',
    },
    {
      type: 'indent',
      text: 1,
    },
    {
      type: 'writeLine',
      text: '-webkit-transform: rotate(360deg);',
    },
    {
      type: 'writeLine',
      text: 'transform: rotate(360deg)',
    },
    {
      type: 'indent',
      text: -1,
    },
    {
      type: 'writeLine',
      text: '}',
    },
    {
      type: 'indent',
      text: -1,
    },
    {
      type: 'writeLine',
      text: '}',
    },
    {
      type: 'writeLine',
      text: '',
    },
  ];
};
