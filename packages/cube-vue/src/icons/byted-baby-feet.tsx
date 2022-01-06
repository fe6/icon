/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-baby-feet', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M15.0001 20.6121C13.5764 26.7616 21.4929 28.327 19.6238 32.6597C17.7546 36.9923 13.5688 36.1258 14.0361 40.4584C14.5035 44.791 20.0419 44.8519 25.0837 42.2415C35.1675 37.0205 37.2708 25.6166 32.7075 20.6122C27.1002 14.4626 16.4237 14.4626 15.0001 20.6121Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <ellipse
      cx="34.5355"
      cy="13.5354"
      rx="2"
      ry="3"
      transform="rotate(40 34.5355 13.5354)"
      fill={props.colors[0]}
    />
    <ellipse
      cx="29.3814"
      cy="10.603"
      rx="2"
      ry="3"
      transform="rotate(25 29.3814 10.603)"
      fill={props.colors[0]}
    />
    <ellipse
      cx="23.3814"
      cy="9.60266"
      rx="2"
      ry="3"
      transform="rotate(6 23.3814 9.60266)"
      fill={props.colors[0]}
    />
    <ellipse
      cx="14"
      cy="7.99992"
      rx="3"
      ry="4"
      transform="rotate(-20 14 7.99992)"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <ellipse
      cx="38.5355"
      cy="17.5355"
      rx="2"
      ry="3"
      transform="rotate(50 38.5355 17.5355)"
      fill={props.colors[0]}
    />
  </svg>
));
