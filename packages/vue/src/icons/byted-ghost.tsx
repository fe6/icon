/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedGhost = IconWrapper(
  'byted-ghost',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd"
        stroke-linejoin={props.strokeLinejoin}>
        <path
          d="M8,44 L12,40 L16,44 L20,38 L24,44 L28,38 L32,44 L36,40 L40,44 L40,20 C40,11.163444 32.836556,4 24,4 C15.163444,4 8,11.163444 8,20 L8,44 Z"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          fill={props.colors[1]}
          fill-rule="nonzero"
        />
        <path
          d="M19,20 L21,20"
          stroke={props.colors[2]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M31,20 L33,20"
          stroke={props.colors[2]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
      </g>
    </svg>
  ),
);
export default BytedGhost;
