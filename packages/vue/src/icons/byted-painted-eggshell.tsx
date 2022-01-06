/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-painted-eggshell',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 43.9998C34.2524 43.9998 40 37.0455 40 25.9998C40 14.9542 31.1316 3.99985 24 3.99985C16.8684 3.99985 8 14.9542 8 25.9998C8 37.0455 13.7476 43.9998 24 43.9998Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M21 37.9998C22.6569 37.9998 24 36.6567 24 34.9998C24 33.343 22.6569 31.9998 21 31.9998C19.3431 31.9998 18 33.343 18 34.9998C18 36.6567 19.3431 37.9998 21 37.9998Z"
        fill={props.colors[2]}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 29.6673C17.1046 29.6673 18 28.7719 18 27.6673C18 26.5628 17.1046 25.6673 16 25.6673C14.8954 25.6673 14 26.5628 14 27.6673C14 28.7719 14.8954 29.6673 16 29.6673Z"
        fill={props.colors[2]}
      />
    </svg>
  ),
);
