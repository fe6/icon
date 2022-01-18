/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedEggOne = IconWrapper(
  'byted-egg-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M29 22.1333C29 30.9699 23.6274 36 17 36C10.3726 36 5 30.9699 5 22.1333C5 11.1634 11.3726 4 17 4C22.6274 4 29 11.1634 29 22.1333Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M29 24.0685C37.5365 24.7023 43 29.6218 43 34C43 38.6895 36.732 44 27.1333 44C20.3603 44 16.143 40.5645 15.2011 36.0001"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
    </svg>
  ),
);
export default BytedEggOne;
