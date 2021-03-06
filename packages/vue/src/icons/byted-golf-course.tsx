/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedGolfCourse = IconWrapper(
  'byted-golf-course',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <ellipse
        cx="24"
        cy="34"
        rx="20"
        ry="10"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle
        cx="32"
        cy="34"
        r="2"
        fill={props.colors[1]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path d="M24 9L13 4V14L24 9Z" fill={props.colors[1]} />
      <path
        d="M13 34V14M13 14V4L24 9L13 14Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedGolfCourse;
