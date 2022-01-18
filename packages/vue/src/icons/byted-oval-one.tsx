/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedOvalOne = IconWrapper(
  'byted-oval-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <ellipse
        cx="24"
        cy="24"
        rx="14"
        ry="20"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
    </svg>
  ),
);
export default BytedOvalOne;
