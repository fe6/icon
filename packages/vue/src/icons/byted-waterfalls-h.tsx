/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedWaterfallsH = IconWrapper(
  'byted-waterfalls-h',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd"
        stroke-linejoin={props.strokeLinejoin}>
        <g
          transform="translate(6.000000, 6.000000)"
          fill={props.colors[1]}
          fill-rule="nonzero"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <rect x="0" y="0" width="14" height="11" />
          <rect x="22" y="25" width="14" height="11" />
          <rect x="22" y="0" width="14" height="17" />
          <rect x="0" y="19" width="14" height="17" />
        </g>
      </g>
    </svg>
  ),
);
export default BytedWaterfallsH;
