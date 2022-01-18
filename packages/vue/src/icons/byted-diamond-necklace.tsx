/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedDiamondNecklace = IconWrapper(
  'byted-diamond-necklace',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M17 32.4091L24 29L31 32.4091V39.9091L24 44L17 39.9091V32.4091Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M8 4C8.45455 12.3333 14 29 24 29C34 29 40 12.7838 40 4"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedDiamondNecklace;
