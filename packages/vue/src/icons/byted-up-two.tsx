/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedUpTwo = IconWrapper(
  'byted-up-two',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M5 24L24 6L43 24H31V42H17V24H5Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedUpTwo;
