/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedProjectorOne = IconWrapper(
  'byted-projector-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M21 21V10H10V21"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="4"
        y="21"
        width="40"
        height="16"
        rx="2"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <rect x="14" y="27" width="4" height="4" rx="2" fill={props.colors[2]} />
      <path
        d="M28 29H36"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedProjectorOne;
