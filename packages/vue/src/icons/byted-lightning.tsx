/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedLightning = IconWrapper(
  'byted-lightning',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M19 4H37L26 18H41L17 44L22 25H8L19 4Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedLightning;
