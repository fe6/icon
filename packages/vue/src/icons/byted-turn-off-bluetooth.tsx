/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTurnOffBluetooth = IconWrapper(
  'byted-turn-off-bluetooth',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M20.6718 11.7778V4L35.2562 15.1111L28.077 19.5556M32.4995 35.9744L20.675 44V29.6275L32.4995 35.9744Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M4 12.5L44 35.5"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M7.44421 33.9999L20.6749 29.6274"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedTurnOffBluetooth;
