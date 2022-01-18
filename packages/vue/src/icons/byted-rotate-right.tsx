/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedRotateRight = IconWrapper(
  'byted-rotate-right',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g transform="translate(24.000000, 24.000000) scale(-1, 1) translate(-24.000000, -24.000000) ">
        <polygon
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          fill={props.colors[1]}
          fill-rule="nonzero"
          stroke-linejoin={props.strokeLinejoin}
          points="12 24 42 24 42 42 12 42"
        />
        <polyline
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
          points="6 8 6 17 15 17"
        />
        <path
          d="M38.4747,13.2985 C35.1956,8.87049 29.933,6 24,6 C18.1788,6 13.0029,8.76334 9.71272,13.0498 L6,17"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
      </g>
    </svg>
  ),
);
export default BytedRotateRight;
