/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-bad', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M9.9478 28.807C13.8691 37.6812 21.9325 41.1901 28 44C30.6324 45.2191 31.3283 40.2831 30.2772 37.3091C29.3933 34.808 27.6256 32.0047 27.6256 32.0047H34.7316C36.665 32.0047 38.2322 30.4375 38.2322 28.5042C38.2322 26.5708 36.665 25.0036 34.7316 25.0036H36.4994C38.4327 25.0036 40 23.4363 40 21.503C40 19.5696 38.4327 18.0024 36.4994 18.0024H32.9639C34.8972 18.0024 36.4644 16.4351 36.4644 14.5018C36.4644 12.5685 34.8972 11.0012 32.9639 11.0012H30.3122C32.2455 11.0012 33.8128 9.43391 33.8128 7.50059C33.8128 5.56726 32.2481 3.99999 30.3148 3.99999H19.6706C16.577 3.99999 12.5995 5.80308 9.9478 10.8043C7.40591 15.5984 7.29614 22.806 9.9478 28.807Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
