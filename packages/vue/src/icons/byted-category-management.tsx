/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedCategoryManagement = IconWrapper(
  'byted-category-management',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="6"
        y="28"
        width="36"
        height="14"
        rx="4"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M20 7H10C7.79086 7 6 8.79086 6 11V17C6 19.2091 7.79086 21 10 21H20"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <circle
        cx="34"
        cy="14"
        r="8"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <circle cx="34" cy="14" r="3" fill={props.colors[2]} />
    </svg>
  ),
);
export default BytedCategoryManagement;
