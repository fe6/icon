/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedCloseRemind = IconWrapper(
  'byted-close-remind',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M7 6.5L41 44.5"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 2C21.7909 2 20 3.79086 20 6H28C28 3.79086 26.2091 2 24 2Z"
        fill={props.colors[0]}
      />
      <path
        d="M17.0703 38C17.5555 41.3923 20.473 44 23.9994 44C27.5259 44 30.4433 41.3923 30.9285 38H17.0703Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M30 38H6C6 38 11.5692 33.359 11.9765 20.5"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M41.9994 38C41.9994 38 35.9994 33 35.9994 19C35.9994 12.3726 30.6268 7 23.9994 7C21.4594 7 19.1036 7.78918 17.1641 9.13571"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedCloseRemind;
