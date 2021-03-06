/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedPumpkin = IconWrapper(
  'byted-pumpkin',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="4"
        y="14"
        width="40"
        height="26"
        rx="13"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <ellipse
        cx="24"
        cy="27"
        rx="8"
        ry="13"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M30 6H27C25.3431 6 24 7.34315 24 9V14"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedPumpkin;
