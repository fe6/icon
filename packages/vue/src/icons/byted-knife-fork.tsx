/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedKnifeFork = IconWrapper(
  'byted-knife-fork',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M14 4V44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M8 5V15C8 20 14 20 14 20C14 20 20 20 20 15V5"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path d="M30 12C30 4 38 4 38 4V21H30V12Z" fill={props.colors[1]} />
      <path
        d="M38 21H30V12C30 4 38 4 38 4V21ZM38 21V44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedKnifeFork;
