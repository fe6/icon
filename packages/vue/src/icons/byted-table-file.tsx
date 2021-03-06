/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTableFile = IconWrapper(
  'byted-table-file',
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
            x="4"
            y="6"
            width="40"
            height="36"
            rx="2"
          />
          <path
            d="M4,18 L44,18"
            stroke={props.colors[2]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M17.5,18 L17.5,42"
            stroke={props.colors[2]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M30.5,18 L30.5,42"
            stroke={props.colors[2]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M4,30 L44,30"
            stroke={props.colors[2]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M44,8 L44,40 C44,41.1045695 43.1045695,42 42,42 L6,42 C4.8954305,42 4,41.1045695 4,40 L4,8"
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
export default BytedTableFile;
