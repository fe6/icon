/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedMerge = IconWrapper(
  'byted-merge',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="4"
        y="24"
        width="20"
        height="22"
        rx="2"
        transform="rotate(-45 4 24)"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="16"
        y="24"
        width="20"
        height="20"
        rx="2"
        transform="rotate(-45 16 24)"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedMerge;
