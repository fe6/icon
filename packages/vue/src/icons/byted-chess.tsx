/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedChess = IconWrapper(
  'byted-chess',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M34 4H14V14H34V4Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M27 14L33 37H15L21 14"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M40 44H8V40L14 37H34L40 40V44Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M12 23.02H36"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M20.5 4V8"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M27.5 4V8"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedChess;
