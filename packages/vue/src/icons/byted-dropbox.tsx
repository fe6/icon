/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedDropbox = IconWrapper(
  'byted-dropbox',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}vue0)`}>
        <path
          d="M24 10L12 18L24 26L36 18L24 10Z"
          fill={props.colors[1]}
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M24 10L36 18L41 11L30 4L24 10Z"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M24 10L12 18L7 11L18 4L24 10Z"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M43 22L36 18L24 26L31 31L43 22Z"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M5 22L12 18L24 26L17 31L5 22Z"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M36 28V37L24 44L12 37V28"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
      </g>
      <defs>
        <clipPath id={props.id + 'vue0'}>
          <rect width="48" height="48" fill={props.colors[2]} />
        </clipPath>
      </defs>
    </svg>
  ),
);
export default BytedDropbox;
