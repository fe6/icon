/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-figma', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <rect
      x="6"
      y="6"
      width="36"
      height="36"
      rx="3"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M18 18C18 16.3431 19.3431 15 21 15H24V21H21C19.3431 21 18 19.6569 18 18V18Z"
      fill={props.colors[3]}
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M18 24C18 22.3431 19.3431 21 21 21H24V27H21C19.3431 27 18 25.6569 18 24V24Z"
      fill={props.colors[3]}
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M18 30C18 28.3431 19.3431 27 21 27H24V30C24 31.6569 22.6569 33 21 33V33C19.3431 33 18 31.6569 18 30V30Z"
      fill={props.colors[3]}
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M24 15H27C28.6569 15 30 16.3431 30 18V18C30 19.6569 28.6569 21 27 21H24V15Z"
      fill={props.colors[3]}
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M24 24C24 22.3431 25.3431 21 27 21V21C28.6569 21 30 22.3431 30 24V24C30 25.6569 28.6569 27 27 27V27C25.3431 27 24 25.6569 24 24V24Z"
      fill={props.colors[3]}
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
