/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-write', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M5.32497 43.4998L13.81 43.5L44.9227 12.3873L36.4374 3.90204L5.32471 35.0147L5.32497 43.4998Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M27.9521 12.3873L36.4374 20.8726"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
