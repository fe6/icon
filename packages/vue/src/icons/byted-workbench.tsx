/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedWorkbench = IconWrapper(
  'byted-workbench',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd">
        <g>
          <polygon
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            fill={props.colors[1]}
            fill-rule="nonzero"
            stroke-linejoin={props.strokeLinejoin}
            points="12 33 4 33 4 7 44 7 44 33 36 33"
          />
          <path
            d="M16,22 L16,26"
            stroke={props.colors[2]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M24,33 L24,39"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M24,18 L24,26"
            stroke={props.colors[2]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M32,14 L32,26"
            stroke={props.colors[2]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M12,41 L36,41"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedWorkbench;
