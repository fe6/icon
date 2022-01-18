/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedSTurnDown = IconWrapper(
  'byted-s-turn-down',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 17L24 13C24 9 27 6 31 6C35 5.99999 38 8.99999 38 13L38 32"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M10 6L10 35C10 39 13 42 17 42C21 42 24 39 24 35L24 17"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M15 11L10 6.00001L5 11"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle
        cx="38"
        cy="37"
        r="5"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
    </svg>
  ),
);
export default BytedSTurnDown;
