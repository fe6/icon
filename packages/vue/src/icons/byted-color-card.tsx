/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedColorCard = IconWrapper(
  'byted-color-card',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M10 44C13.3137 44 16 41.3137 16 38V23.5147V4H4V38C4 41.3137 6.68629 44 10 44Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M14.2422 42.2426L43.9848 12.5L35.4848 4L15.9995 23.5147"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24.4853 32H44V44H12.5"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedColorCard;
