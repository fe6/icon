/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedBigClock = IconWrapper(
  'byted-big-clock',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 4C12.9543 4 4 12.8648 4 23.8V44H44V23.8C44 12.8648 35.0457 4 24 4Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle
        cx="24"
        cy="24"
        r="12"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 18V24L28 28"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedBigClock;
