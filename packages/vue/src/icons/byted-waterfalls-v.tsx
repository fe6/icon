/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedWaterfallsV = IconWrapper(
  'byted-waterfalls-v',
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
          transform="translate(5.500000, 5.500000)"
          fill={props.colors[1]}
          fill-rule="nonzero"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <rect
            transform="translate(9.000000, 7.500000) rotate(-270.000000) translate(-9.000000, -7.500000) "
            x="2"
            y="-1"
            width="14"
            height="17"
          />
          <rect
            transform="translate(28.000000, 29.500000) rotate(-270.000000) translate(-28.000000, -29.500000) "
            x="21"
            y="21"
            width="14"
            height="17"
          />
          <rect
            transform="translate(31.000000, 7.500000) rotate(-90.000000) translate(-31.000000, -7.500000) "
            x="24"
            y="2"
            width="14"
            height="11"
          />
          <rect
            transform="translate(6.000000, 29.500000) rotate(-90.000000) translate(-6.000000, -29.500000) "
            x="-1"
            y="24"
            width="14"
            height="11"
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedWaterfallsV;
