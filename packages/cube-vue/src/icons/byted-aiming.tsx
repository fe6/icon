/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-aiming', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <circle
      cx="24"
      cy="24"
      r="20"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 37V44V37Z"
      fill={props.colors[1]}
    />
    <path
      d="M24 37V44"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M36 24H44H36Z"
      fill={props.colors[1]}
    />
    <path
      d="M36 24H44"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 24H11H4Z"
      fill={props.colors[1]}
    />
    <path
      d="M4 24H11"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 11V4V11Z"
      fill={props.colors[1]}
    />
    <path
      d="M24 11V4"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
