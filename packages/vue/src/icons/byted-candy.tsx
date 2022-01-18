/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedCandy = IconWrapper(
  'byted-candy',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="24"
        r="10"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 28C21.7909 28 20 26.2091 20 24"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M16.6875 16.8125L3.90824 14.9668L14.8418 4.03324L16.6875 16.8125Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M31.3125 31.3125L44.0918 33.1582L33.1582 44.0918L31.3125 31.3125Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedCandy;
