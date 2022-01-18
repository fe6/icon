/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTabletennis = IconWrapper(
  'byted-tabletennis',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M31.45 16.96C34.2114 16.96 36.45 14.7214 36.45 11.96C36.45 9.19857 34.2114 6.95999 31.45 6.95999C28.6885 6.95999 26.45 9.19857 26.45 11.96C26.45 14.7214 28.6885 16.96 31.45 16.96Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
      />
      <path
        d="M36 34L34 23L23 28L10 25"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M4 41.03H44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle cx="9" cy="25" r="5" fill={props.colors[0]} />
      <circle cx="6" cy="17" r="2" fill={props.colors[0]} />
      <path
        d="M34 23L44 29L29 34"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedTabletennis;
