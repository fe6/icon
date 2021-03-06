/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedUsb = IconWrapper(
  'byted-usb',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd">
        <g>
          <path
            d="M12,22 C14.209139,22 16,20.209139 16,18 C16,15.790861 14.209139,14 12,14 C9.790861,14 8,15.790861 8,18 C8,20.209139 9.790861,22 12,22 Z"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            fill={props.colors[1]}
            fill-rule="nonzero"
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M36,28 C38.209139,28 40,26.209139 40,24 C40,21.790861 38.209139,20 36,20 C33.790861,20 32,21.790861 32,24 C32,26.209139 33.790861,28 36,28 Z"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            fill={props.colors[1]}
            fill-rule="nonzero"
            stroke-linejoin={props.strokeLinejoin}
          />
          <polyline
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
            points="19 9 24 4 29 9"
          />
          <polyline
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
            points="25 39 12 28.2631579 12 22"
          />
          <polyline
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
            points="36 28 36 32.7894737 24 41"
          />
          <path
            d="M24,4 L24,43"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M21,44 L27,44"
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
export default BytedUsb;
