/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedWaves = IconWrapper(
  'byted-waves',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M2 23.3548H11L17.8889 4L28.8889 44L37 23.3548H46"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedWaves;
