/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-stopwatch-start',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd"
        stroke-linejoin={props.strokeLinejoin}>
        <g
          transform="translate(7.000000, 3.000000)"
          stroke-width={props.strokeWidth}>
          <circle
            stroke={props.colors[0]}
            fill={props.colors[1]}
            fill-rule="nonzero"
            cx="17"
            cy="24"
            r="17"
          />
          <path
            d="M11,1 L23,1"
            stroke={props.colors[0]}
            stroke-linecap={props.strokeLinecap}
          />
          <path
            d="M17,16 L17,24"
            stroke={props.colors[2]}
            stroke-linecap={props.strokeLinecap}
          />
          <path
            d="M25,24 L17,24"
            stroke={props.colors[2]}
            stroke-linecap={props.strokeLinecap}
          />
          <path
            d="M17,1 L17,5"
            stroke={props.colors[0]}
            stroke-linecap={props.strokeLinecap}
          />
        </g>
      </g>
    </svg>
  ),
);
