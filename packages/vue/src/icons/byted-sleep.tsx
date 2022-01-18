/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedSleep = IconWrapper(
  'byted-sleep',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M16.8657 7.46922C16.3036 9.21179 16 11.0704 16 13C16 22.9411 24.0589 31 34 31C36.5346 31 38.9468 30.4761 41.1343 29.5308C38.8006 36.766 32.0116 42 24 42C14.0589 42 6 33.9411 6 24C6 16.5935 10.4734 10.2317 16.8657 7.46922Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M31.6605 10H41L31 18H41"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedSleep;
