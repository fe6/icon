/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-seal', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M5 37C5 35.8954 5.89543 35 7 35H41C42.1046 35 43 35.8954 43 37V42C43 43.1046 42.1046 44 41 44H7C5.89543 44 5 43.1046 5 42V37Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <path
      d="M5 31C5 29.8954 5.89543 29 7 29H41C42.1046 29 43 29.8954 43 31V42C43 43.1046 42.1046 44 41 44H7C5.89543 44 5 43.1046 5 42V31Z"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <path
      d="M18.763 15.6637C18.9051 15.2657 19.2821 15 19.7047 15H28.2953C28.7179 15 29.0949 15.2657 29.237 15.6637L34 29H14L18.763 15.6637Z"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <rect
      x="15"
      y="4"
      width="18"
      height="10.8"
      rx="5.4"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
  </svg>
));
