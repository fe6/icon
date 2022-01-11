/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-six', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M19 41C13.5 38.25 8.00129 30 5.00063 25C1.99996 20 8.3132 15.3125 12.0004 19C15.6876 22.6875 16.0004 23 16.0004 23V17.5C16.0004 15.567 17.5674 14 19.5004 14C21.4334 14 23.0004 15.567 23.0004 17.5V16C23.0004 14.067 24.5674 12.5 26.5004 12.5C28.4334 12.5 30.0004 14.067 30.0004 16V17.5C30.0004 15.567 31.5674 14 33.5004 14C35.4334 14 37.0004 15.567 37.0004 17.5V7.5C37.0004 5.567 38.5674 4 40.5004 4C42.4334 4 44.0004 5.567 44.0004 7.5V28.9663C44.0004 30.9689 43.6302 32.9743 42.545 34.6573C41.2631 36.6453 39.1116 39.3028 36 41C30.4999 44 24.5 43.75 19 41Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));