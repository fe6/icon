/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedFolder = IconWrapper(
  'byted-folder',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M7 6C7 4.89543 7.89543 4 9 4H39C40.1046 4 41 4.89543 41 6V42C41 43.1046 40.1046 44 39 44H9C7.89543 44 7 43.1046 7 42V6Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M16 29H20"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M16 35H26"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M8 5C8 5 11.7647 18 24 18C36.2353 18 40 5 40 5"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle
        cx="24"
        cy="18"
        r="4"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M15 4H9C7.89543 4 7 4.89543 7 6V12"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M33 4H39C40.1046 4 41 4.89543 41 6V12"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedFolder;
