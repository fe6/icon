/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-round', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <circle
      cx="24"
      cy="24"
      r="20"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
  </svg>
));
