/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedSaveOne = IconWrapper(
  'byted-save-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M39.3 6.00012H8.7C7.20883 6.00012 6 7.20895 6 8.70012V39.3001C6 40.7913 7.20883 42.0001 8.7 42.0001H39.3C40.7912 42.0001 42 40.7913 42 39.3001V8.70012C42 7.20895 40.7912 6.00012 39.3 6.00012Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M32 6V24H15V6H32Z"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M26 13.0001V17.0001"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M10.9969 6.00012H35.9985"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
export default BytedSaveOne;
