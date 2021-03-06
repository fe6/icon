/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTrend = IconWrapper(
  'byted-trend',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd">
        <g>
          <rect
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            fill={props.colors[1]}
            fill-rule="nonzero"
            stroke-linejoin={props.strokeLinejoin}
            x="6"
            y="6"
            width="36"
            height="36"
            rx="3"
          />
          <g
            transform="translate(13.000000, 13.000000)"
            stroke={props.colors[2]}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
            stroke-width={props.strokeWidth}>
            <polyline
              transform="translate(10.729923, 10.927306) rotate(-135.000000) translate(-10.729923, -10.927306) "
              points="13.8290808 -0.525973264 13.8290808 7.47402674 7.63076535 7.48132266 7.6591204 22.3805856"
            />
            <polyline points="13 5 21 5 21 13" />
          </g>
        </g>
      </g>
    </svg>
  ),
);
export default BytedTrend;
