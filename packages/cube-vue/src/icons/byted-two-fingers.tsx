/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-two-fingers',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M12.5658 27.1826C10.8553 28.3544 10 30.2936 10 33.0003C10 37.0604 14.9753 44.0003 19.4618 44.0003C23.9483 44.0003 26.5502 44.0003 30.9415 44.0003C35.3328 44.0003 38 40.1497 38 37.0604C38 32.7101 38 28.3597 38 24.0094C38 22.3526 36.6569 21.0094 35 21.0094H34.9909C33.3391 21.0094 32 22.3485 32 24.0003"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M13.9812 29.4453V11.006C13.9812 9.35049 15.3233 8.00844 16.9788 8.00844C16.9815 8.00844 16.9843 8.00844 16.9871 8.00845C18.6485 8.01305 19.9929 9.36119 19.9929 11.0226V24.5921"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M19.9929 24.0085V7.01562C19.9929 5.35022 21.343 4.00014 23.0084 4.00014C24.6738 4.00014 26.0239 5.35022 26.0239 7.01562V24.0085"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M26 23.7159V21.0036C26 19.3467 27.3431 18.0036 29 18.0036C30.6569 18.0036 32 19.3467 32 21.0036V24.0036"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
