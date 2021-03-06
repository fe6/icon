/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedHdd = IconWrapper(
  'byted-hdd',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="9"
        y="4"
        width="30"
        height="40"
        rx="2"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle cx="32" cy="10" r="2" fill={props.colors[2]} />
      <circle cx="16" cy="10" r="2" fill={props.colors[2]} />
      <circle cx="32" cy="38" r="2" fill={props.colors[2]} />
      <circle cx="16" cy="38" r="2" fill={props.colors[2]} />
      <path
        d="M24 30C28.4183 30 32 26.4183 32 22C32 17.5817 28.4183 14 24 14C19.5817 14 16 17.5817 16 22"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 22L18 28"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedHdd;
