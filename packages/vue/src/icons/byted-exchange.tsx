/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedExchange = IconWrapper(
  'byted-exchange',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 16H29V4L44 19L29 34V24H18V13L4 28L18 44V32H23"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedExchange;
