/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedInbox = IconWrapper(
  'byted-inbox',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd">
        <g>
          <polyline
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
            points="4 30 9 6 9 6 39 6 44 30"
          />
          <polygon
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            fill={props.colors[1]}
            fill-rule="nonzero"
            stroke-linejoin={props.strokeLinejoin}
            points="4 30 14.9090909 30 16.7272727 36 31.2727273 36 33.0909091 30 44 30 44 43 4 43"
          />
          <path
            d="M19,14 L29,14"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M16,22 L32,22"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedInbox;
