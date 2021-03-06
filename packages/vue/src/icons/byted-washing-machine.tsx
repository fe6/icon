/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedWashingMachine = IconWrapper(
  'byted-washing-machine',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="8"
        y="4"
        width="32"
        height="40"
        rx="2"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M8 15.5H40"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle cx="28" cy="10" r="2" fill={props.colors[0]} />
      <circle cx="34" cy="10" r="2" fill={props.colors[0]} />
      <circle
        cx="24"
        cy="30"
        r="7"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
    </svg>
  ),
);
export default BytedWashingMachine;
