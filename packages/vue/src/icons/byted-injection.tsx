/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-injection', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M38.1684 22.262L19.0766 41.3539L6.34863 28.6259L25.4405 9.53406"
      fill={props.colors[1]}
    />
    <path
      d="M38.1684 22.262L19.0766 41.3539L6.34863 28.6259L25.4405 9.53406"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M21.9053 5.99854L41.7043 25.7975"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
    />
    <path
      d="M14.834 28.6259L19.0766 32.8686"
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
    />
    <path
      d="M6.34961 41.353L12.7128 34.9898"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
    />
    <path
      d="M31.8047 15.8979L35.3394 12.3632"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
    />
  </svg>
));
