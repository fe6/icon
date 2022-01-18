/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedReject = IconWrapper(
  'byted-reject',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd">
        <g>
          <path
            d="M19.0099137,42 L9,42 C7.34314575,42 6,40.6568542 6,39 L6,9 C6,7.34314575 7.34314575,6 9,6 L9,6 L39,6 C40.6568542,6 42,7.34314575 42,9 L42,19.0303905"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M42,29.0345925 L42,41 C42,41.5522847 41.5522847,42 41,42 L29.037068,42"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M42,29.0345925 L18,29.0345925"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <polyline
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
            transform="translate(20.000000, 29.000000) scale(-1, 1) translate(-20.000000, -29.000000) "
            points="17 23 23 29 17 35"
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedReject;
