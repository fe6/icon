/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedRowing = IconWrapper(
  'byted-rowing',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M30.02 16C32.7814 16 35.02 13.7614 35.02 11C35.02 8.23858 32.7814 6 30.02 6C27.2586 6 25.02 8.23858 25.02 11C25.02 13.7614 27.2586 16 30.02 16Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
      />
      <path
        d="M42 31L35 44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M32.01 40L26 29L9 40L21 20L44 25"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M4 40H44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedRowing;
