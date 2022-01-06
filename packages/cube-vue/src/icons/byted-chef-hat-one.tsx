/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-chef-hat-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M13 24.1246C9.01253 23.3584 6 19.851 6 15.64C6 10.8683 9.86826 7 14.64 7C15.4066 7 16.1498 7.09983 16.8574 7.2872C18.4398 5.28493 20.8898 4 23.64 4C26.4704 4 28.9829 5.36098 30.5588 7.46422C31.4372 7.16331 32.3795 7 33.36 7C38.1317 7 42 10.8683 42 15.64C42 19.851 38.9875 23.3584 35 24.1246V40C35 41.1046 34.1046 42 33 42H15C13.8954 42 13 41.1046 13 40V24.1246Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M13 31L35 31"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M20 25V31"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M35 28V34"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M13 28V34"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
