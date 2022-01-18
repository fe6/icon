/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedBluetooth = IconWrapper(
  'byted-bluetooth',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M12 13L34 34L23 44V4L34 14L12 35"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedBluetooth;
