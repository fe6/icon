/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-list-checkbox',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 24H44H20Z"
        fill={props.colors[1]}
      />
      <path
        d="M20 24H44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 38H44H20Z"
        fill={props.colors[1]}
      />
      <path
        d="M20 38H44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 10H44H20Z"
        fill={props.colors[1]}
      />
      <path
        d="M20 10H44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="4"
        y="34"
        width="8"
        height="8"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="4"
        y="20"
        width="8"
        height="8"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="4"
        y="6"
        width="8"
        height="8"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
