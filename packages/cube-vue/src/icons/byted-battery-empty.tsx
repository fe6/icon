/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-battery-empty',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M38 14H6C4.89543 14 4 14.8954 4 16V32C4 33.1046 4.89543 34 6 34H38C39.1046 34 40 33.1046 40 32V16C40 14.8954 39.1046 14 38 14Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M42 20H44C45.1046 20 46 20.8954 46 22V26C46 27.1046 45.1046 28 44 28H42V20Z"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
