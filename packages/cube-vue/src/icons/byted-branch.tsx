/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-branch', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(5.000000, 4.000000)"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}>
        <circle
          fill={props.colors[1]}
          fill-rule="nonzero"
          cx="35"
          cy="20"
          r="4"
        />
        <circle
          fill={props.colors[1]}
          fill-rule="nonzero"
          cx="4"
          cy="4"
          r="4"
        />
        <circle
          fill={props.colors[1]}
          fill-rule="nonzero"
          cx="4"
          cy="36"
          r="4"
        />
        <polyline
          stroke-linecap={props.strokeLinecap}
          points="4 8 4 32 4 20.0083363 31 20.0083363"
        />
      </g>
    </g>
  </svg>
));
