/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-pay-code', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(4.000000, 4.000000)"
        stroke-width={props.strokeWidth}>
        <rect
          stroke={props.colors[0]}
          fill={props.colors[1]}
          fill-rule="nonzero"
          x="0"
          y="0"
          width="40"
          height="40"
        />
        <path
          d="M8,12 L8,28"
          stroke={props.colors[2]}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M16,12 L16,28"
          stroke={props.colors[2]}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M24,12 L24,28"
          stroke={props.colors[2]}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M32,12 L32,28"
          stroke={props.colors[2]}
          stroke-linecap={props.strokeLinecap}
        />
      </g>
    </g>
  </svg>
));
