/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedFireworks = IconWrapper(
  'byted-fireworks',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd">
        <g transform="translate(6.000000, 2.000000)">
          <polygon
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            fill={props.colors[1]}
            fill-rule="nonzero"
            stroke-linejoin={props.strokeLinejoin}
            points="0 40 8.67409249 15.2640024 25 32.0384615"
          />
          <path
            d="M17,17 L22,12 C24.6666667,9.33333333 25,7 23,5"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M23,23 L28,18 C31.3333333,14.6666667 34.6666667,14.6666667 38,18"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <circle fill={props.colors[0]} cx="14" cy="3" r="2" />
          <circle fill={props.colors[0]} cx="36" cy="2" r="2" />
          <circle fill={props.colors[0]} cx="36" cy="25" r="2" />
          <circle fill={props.colors[0]} cx="33" cy="34" r="2" />
        </g>
      </g>
    </svg>
  ),
);
export default BytedFireworks;
