/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-vicia-faba',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}cube-vue0)`}>
        <path
          d="M3.99989 31C4.00014 24.5 8.0004 22.0373 11.0001 21.0186C13.9997 20 16.0003 20 18.9999 17C21.9995 14 22.0004 7.99999 28 5.99999C33.9995 3.99998 41.091 7.00002 42.9997 14C44.9084 21 39.5006 30 37.0006 33C34.5006 36 29.4987 41 20.9996 42C12.5006 43 3.99963 37.5 3.99989 31Z"
          fill={props.colors[1]}
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M12 21.0435C19 30 29 21.0435 22 12"
          stroke={props.colors[2]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M11.0005 21.0186C14.0002 20 16.0008 20 19.0004 17C22 14 22.0009 7.99998 28.0004 5.99998"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
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
