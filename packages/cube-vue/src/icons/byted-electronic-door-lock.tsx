/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-electronic-door-lock',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="6"
        y="4"
        width="26"
        height="40"
        rx="2"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="20"
        y="30"
        width="24"
        height="8"
        rx="4"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle cx="12" cy="12" r="2" fill={props.colors[0]} />
      <circle cx="12" cy="18" r="2" fill={props.colors[0]} />
      <circle cx="12" cy="24" r="2" fill={props.colors[0]} />
      <circle cx="19" cy="12" r="2" fill={props.colors[0]} />
      <circle cx="19" cy="18" r="2" fill={props.colors[0]} />
      <circle cx="19" cy="24" r="2" fill={props.colors[0]} />
      <circle cx="26" cy="12" r="2" fill={props.colors[0]} />
      <circle cx="26" cy="18" r="2" fill={props.colors[0]} />
      <circle cx="26" cy="24" r="2" fill={props.colors[0]} />
    </svg>
  ),
);
