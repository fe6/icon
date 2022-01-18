/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedHuntingGear = IconWrapper(
  'byted-hunting-gear',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M44 29H4V42H44V29Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M29 22C31.7614 22 34 19.7614 34 17C34 14.2386 31.7614 12 29 12"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M20 17H28"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
export default BytedHuntingGear;
