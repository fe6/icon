/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedMultiRectangle = IconWrapper(
  'byted-multi-rectangle',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M12 39H44V7H12V15"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M8 39H32V15H8V23"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="4"
        y="23"
        width="16"
        height="16"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedMultiRectangle;
