/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedRugby = IconWrapper(
  'byted-rugby',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}>
        <g
          transform="translate(24.000000, 24.000000) rotate(-45.000000) translate(-24.000000, -24.000000) translate(0.000000, 10.000000)"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <ellipse cx="24" cy="14" rx="24" ry="14" />
          <path
            d="M24,18 L24,10"
            transform="translate(24.000000, 14.000000) rotate(180.000000) translate(-24.000000, -14.000000) "
          />
          <path
            d="M30,18 L30,10"
            transform="translate(30.000000, 14.000000) rotate(180.000000) translate(-30.000000, -14.000000) "
          />
          <path
            d="M18,18 L18,10"
            transform="translate(18.000000, 14.000000) rotate(180.000000) translate(-18.000000, -14.000000) "
          />
          <path d="M8,14.0083363 L40,14.0083363" />
          <path
            d="M8,24 L8,4"
            transform="translate(8.000000, 14.000000) rotate(180.000000) translate(-8.000000, -14.000000) "
          />
          <path
            d="M40,24 L40,4"
            transform="translate(40.000000, 14.000000) rotate(180.000000) translate(-40.000000, -14.000000) "
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedRugby;
