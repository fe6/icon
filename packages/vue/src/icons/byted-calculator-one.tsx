/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-calculator-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="8"
        y="4"
        width="32"
        height="40"
        rx="2"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="14"
        y="11"
        width="20"
        height="9"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle cx="17" cy="26" r="2" fill={props.colors[0]} />
      <circle cx="17" cy="32" r="2" fill={props.colors[0]} />
      <circle cx="17" cy="38" r="2" fill={props.colors[0]} />
      <circle cx="24" cy="26" r="2" fill={props.colors[0]} />
      <circle cx="24" cy="32" r="2" fill={props.colors[0]} />
      <circle cx="24" cy="38" r="2" fill={props.colors[0]} />
      <circle cx="31" cy="26" r="2" fill={props.colors[0]} />
      <circle cx="31" cy="32" r="2" fill={props.colors[0]} />
      <circle cx="31" cy="38" r="2" fill={props.colors[0]} />
    </svg>
  ),
);
