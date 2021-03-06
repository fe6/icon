/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-poker', false, (props: ISvgIconProps) => (
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
          x="8"
          y="0"
          width="30"
          height="40"
        />
        <polygon
          stroke={props.colors[0]}
          stroke-linecap={props.strokeLinecap}
          points="0 7.78947368 8 6 8 40"
        />
        <polygon
          stroke={props.colors[2]}
          fill={props.colors[3]}
          fill-rule="nonzero"
          points="23 14 18 20 23 26 28 20"
        />
        <path
          d="M14,6 L14,10"
          stroke={props.colors[2]}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M32,30 L32,34"
          stroke={props.colors[2]}
          stroke-linecap={props.strokeLinecap}
        />
      </g>
    </g>
  </svg>
));
