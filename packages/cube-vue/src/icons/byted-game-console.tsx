/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-game-console',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="10"
        y="4"
        width="28"
        height="40"
        rx="2"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M16 34H24"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M20 30V38"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="16"
        y="10"
        width="16"
        height="9"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle cx="31" cy="30" r="2" fill={props.colors[0]} />
      <circle cx="31" cy="38" r="2" fill={props.colors[0]} />
    </svg>
  ),
);
