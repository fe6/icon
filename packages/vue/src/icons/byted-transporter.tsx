/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTransporter = IconWrapper(
  'byted-transporter',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M42 8H20C18.8954 8 18 8.89543 18 10L18 32C18 33.1046 18.8954 34 20 34H42C43.1046 34 44 33.1046 44 32V10C44 8.89543 43.1046 8 42 8Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M4.00001 34H18V20H11L4.00001 26.4615L4.00001 34Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M18 36C18 38.2091 16.2091 40 14 40C11.7909 40 10 38.2091 10 36"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M40 36C40 38.2091 38.2091 40 36 40C33.7909 40 32 38.2091 32 36"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedTransporter;
