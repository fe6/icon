/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedRobot = IconWrapper(
  'byted-robot',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="9"
        y="17"
        width="30"
        height="26"
        rx="2"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M33 9L28 17"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M15 9L20 17"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle
        cx="34"
        cy="7"
        r="2"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <circle
        cx="14"
        cy="7"
        r="2"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <rect
        x="16"
        y="24"
        width="16"
        height="8"
        rx="4"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M9 24H4V34H9"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M39 24H44V34H39"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedRobot;
