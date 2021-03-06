/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedMaximum = IconWrapper(
  'byted-maximum',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M4 4V44H44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M10 38C10 38 15.3125 4 27 4C38.6875 4 44 38 44 38"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M10 4L44 4"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
        stroke-dasharray="2 6"
      />
    </svg>
  ),
);
export default BytedMaximum;
