/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedViewGridCard = IconWrapper(
  'byted-view-grid-card',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="3"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="27"
        y="13"
        width="8"
        height="8"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="13"
        y="27"
        width="8"
        height="8"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="27"
        y="27"
        width="8"
        height="8"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedViewGridCard;
