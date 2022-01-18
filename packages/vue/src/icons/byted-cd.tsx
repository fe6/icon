/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedCd = IconWrapper(
  'byted-cd',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M13 24C13 17.9249 17.9249 13 24 13"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <circle
        cx="24"
        cy="24"
        r="5"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
    </svg>
  ),
);
export default BytedCd;
