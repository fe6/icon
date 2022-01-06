/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-paint', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 50 50" fill="none">
    <path
      d="M16.9893 23.6108L26.8888 33.5103"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M16.9893 23.6108L8.50398 32.0961C5.77031 34.8298 5.77031 39.2619 8.50398 41.9956V41.9956C11.2376 44.7293 15.6698 44.7293 18.4035 41.9956L26.8888 33.5103"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M16.9893 33.5104L12.7466 37.753"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M26.8887 33.5104L41.7961 27.0781C44.4833 25.9186 45.6045 22.6991 43.8816 20.3333C39.7179 14.6162 34.1044 9.60358 29.9632 6.53609C27.6736 4.84022 24.6332 5.89535 23.5044 8.5114L16.9892 23.6109L26.8887 33.5104Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
