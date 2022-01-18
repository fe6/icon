/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedCakeTwo = IconWrapper(
  'byted-cake-two',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M40 17.9L31.0577 8L9 17.9V30H40V17.9Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M9 18H26.386C26.4489 18 26.5 18.0511 26.5 18.114V21.625C26.5 23.2128 27.7872 24.5 29.375 24.5V24.5C30.9628 24.5 32.25 23.2128 32.25 21.625V18.114C32.25 18.0511 32.3011 18 32.364 18H40"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M9.5 23.9568C8.89836 24.2576 8.33775 24.577 7.82243 24.9131C5.41836 26.481 4 28.4118 4 30.5C4 35.7467 12.9543 40 24 40C35.0457 40 44 35.7467 44 30.5C44 28.3609 42.5116 26.387 40 24.7991"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
    </svg>
  ),
);
export default BytedCakeTwo;
