/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedShuffleOne = IconWrapper(
  'byted-shuffle-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M40 33L44 37L40 41"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M40 7L44 11L40 15"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M44 11.0001H37C29.8203 11.0001 24 16.8204 24 24.0001V24.0001C24 31.1798 29.8203 37.0001 37 37.0001H44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M4 37.0001H11C18.1797 37.0001 24 31.1798 24 24.0001V24.0001C24 16.8204 18.1797 11.0001 11 11.0001L4 11.0001"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
export default BytedShuffleOne;
