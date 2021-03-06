/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-sim', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(8.000000, 4.000000)"
        stroke-width={props.strokeWidth}>
        <polygon
          stroke={props.colors[0]}
          fill={props.colors[1]}
          fill-rule="nonzero"
          points="0 0 24.8888889 0 32 7.27272727 32 40 0 40"
        />
        <rect
          stroke={props.colors[2]}
          fill={props.colors[3]}
          fill-rule="nonzero"
          x="7"
          y="22"
          width="18"
          height="10"
        />
        <path
          d="M7,8 L7,14"
          stroke={props.colors[2]}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M13,8 L13,14"
          stroke={props.colors[2]}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M19,8 L19,14"
          stroke={props.colors[2]}
          stroke-linecap={props.strokeLinecap}
        />
      </g>
    </g>
  </svg>
));
