/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedWhirlwind = IconWrapper(
  'byted-whirlwind',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="24"
        r="5"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M23.5 44C16.5964 44 11 38.4036 11 31.5C11 24.5964 16.5964 19 23.5 19"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M44 23.5C44 30.4036 38.4036 36 31.5 36C24.5964 36 19 30.4036 19 23.5"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M23.5 29C30.4036 29 36 23.4036 36 16.5C36 9.59644 30.4036 4 23.5 4"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M29 23.5C29 16.5964 23.4036 11 16.5 11C9.59644 11 4 16.5964 4 23.5"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedWhirlwind;
