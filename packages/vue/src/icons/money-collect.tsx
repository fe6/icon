/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('money-collect', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g>
      <g transform="translate(4.000000, 7.000000)">
        <rect
          stroke={props.colors[0]}
          fill={props.colors[1]}
          fill-rule="nonzero"
          x="0"
          y="0"
          width="40"
          height="34"
          rx="5"
          stroke-linejoin={props.strokeLinejoin}
          stroke-width={props.strokeWidth}
        />
        <g transform="translate(13.000000, 8.000000)">
          <polyline
            points="1 0 7 6 13 0"
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
            stroke-width={props.strokeWidth}
            stroke={props.colors[2]}
            fill="none"
            fill-rule="evenodd"
          />
          <path
            d="M0,8 L14,8"
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
            stroke-width={props.strokeWidth}
            stroke={props.colors[2]}
            fill="none"
            fill-rule="evenodd"
          />
          <path
            d="M0,14 L14,14"
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
            stroke-width={props.strokeWidth}
            stroke={props.colors[2]}
            fill="none"
            fill-rule="evenodd"
          />
          <path
            d="M7,8 L7,19"
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
            stroke-width={props.strokeWidth}
            stroke={props.colors[2]}
            fill="none"
            fill-rule="evenodd"
          />
        </g>
      </g>
    </g>
  </svg>
));
