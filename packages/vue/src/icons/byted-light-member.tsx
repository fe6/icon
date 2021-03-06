/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedLightMember = IconWrapper(
  'byted-light-member',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M35.0564 15.0002L18.4628 7.66508C17.5888 7.27875 16.5636 7.56461 16.0157 8.34745L11.359 15.0002"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M43 15H5C4.44772 15 4 15.4477 4 16V40C4 40.5523 4.44772 41 5 41H43C43.5523 41 44 40.5523 44 40V16C44 15.4477 43.5523 15 43 15Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M19 23L24.1026 33L29 23"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedLightMember;
