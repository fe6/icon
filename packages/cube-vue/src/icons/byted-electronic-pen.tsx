/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-electronic-pen',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}cube-vue0)`}>
        <rect
          x="35.1924"
          y="5.32239"
          width="12"
          height="38"
          rx="6"
          transform="rotate(45 35.1924 5.32239)"
          fill={props.colors[1]}
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
        />
        <path
          d="M18 23L26 31"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M6 43L12 37"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <rect
          x="33.2679"
          y="12.3397"
          width="4"
          height="4"
          rx="2"
          transform="rotate(30 33.2679 12.3397)"
          fill={props.colors[2]}
        />
      </g>
      <defs>
        <clipPath id={`${props.id}cube-vue0`}>
          <rect width="48" height="48" fill={props.colors[2]} />
        </clipPath>
      </defs>
    </svg>
  ),
);
