/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedPaypal = IconWrapper(
  'byted-paypal',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.0312 28C39 28 43 25.5 43 20C43 14.5 39 12 33.0312 12H22L17 43H26L28 28H33.0312Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M18 36H10L15 5H26.0312C32 5 36 7.5 36 13C36 18.5 32 21 26.0312 21H21"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedPaypal;
