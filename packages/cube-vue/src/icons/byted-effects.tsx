/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-effects', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M24.9505 42.3604L30.4161 30.3695L43.1044 26.6501L33.3381 17.7699L33.7057 4.60739L22.2041 11.1099L9.74305 6.69445L12.401 19.5935L4.33204 30.0271L17.4763 31.4966L24.9505 42.3604Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M36.1776 36.0537L44.1776 44.0179"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
