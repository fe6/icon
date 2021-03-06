/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedStrongbox = IconWrapper(
  'byted-strongbox',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="3"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle cx="12" cy="12" r="2" fill={props.colors[2]} />
      <circle cx="12" cy="36" r="2" fill={props.colors[2]} />
      <circle cx="36" cy="12" r="2" fill={props.colors[2]} />
      <circle cx="36" cy="36" r="2" fill={props.colors[2]} />
      <circle
        cx="24"
        cy="24"
        r="9"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedStrongbox;
