/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedFileDisplay = IconWrapper(
  'byted-file-display',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M10 44H38C39.1046 44 40 43.1046 40 42V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 34C28.9706 34 33 28 33 28C33 28 28.9706 22 24 22C19.0294 22 15 28 15 28C15 28 19.0294 34 24 34Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 30C25.1046 30 26 29.1046 26 28C26 26.8954 25.1046 26 24 26C22.8954 26 22 26.8954 22 28C22 29.1046 22.8954 30 24 30Z"
        fill={props.colors[2]}
      />
      <path
        d="M30 4V14H40"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedFileDisplay;
