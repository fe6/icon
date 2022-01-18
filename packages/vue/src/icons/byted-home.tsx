/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedHome = IconWrapper(
  'byted-home',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path d="M9 18V42H39V18L24 6L9 18Z" fill={props.colors[1]} />
      <path
        d="M9 42V18L4 22L24 6L44 22L39 18V42H9Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M19 29V42H29V29H19Z"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M9 42H39"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
export default BytedHome;
