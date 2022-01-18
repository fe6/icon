/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTicketOne = IconWrapper(
  'byted-ticket-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M4 8H11C11 8 12 13 17 13C22 13 23 8 23 8H44V40H23C23 40 22 35 17 35C12 35 11 40 11 40H4V8Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M17 19V21"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M17 27L17 29"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M25 21H36"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M25 27H36"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
export default BytedTicketOne;
