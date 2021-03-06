/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedAirplay = IconWrapper(
  'byted-airplay',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M12 35.0136H9H4V8.01267C4 6.90862 4.89543 6.01361 6 6.01361H42C43.1046 6.01361 44 6.90862 44 8.01267V35.0136H36"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 32L14 42H34L24 32Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedAirplay;
