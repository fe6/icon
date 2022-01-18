/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedNavigation = IconWrapper(
  'byted-navigation',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24.5 4L9 44L24.5 34.9091L40 44L24.5 4Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedNavigation;
