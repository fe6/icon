/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedDegreeHat = IconWrapper(
  'byted-degree-hat',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M2 17.4L23.0222 9L44.0444 17.4L23.0222 25.8L2 17.4Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M44.0444 17.5101V26.7333"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M11.5555 21.8253V34.2667C11.5555 34.2667 16.3656 39 23.0222 39C29.6788 39 34.4889 34.2667 34.4889 34.2667V21.8253"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedDegreeHat;
