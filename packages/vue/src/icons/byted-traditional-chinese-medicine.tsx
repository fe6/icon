/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-traditional-chinese-medicine',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 42.9999C24.8653 42.9999 26.8503 42.9999 29.9551 42.9999C30.0381 40.263 30.4393 38.7581 31.1586 38.4851C38.6685 35.6356 44 28.4338 44 19.9999H4C4 28.2513 9.10319 35.3233 16.3568 38.294C17.1151 38.6046 17.6815 40.1732 18.056 42.9999C21.0857 42.9999 23.067 42.9999 24 42.9999Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M14.4434 27.0223C14.803 28.2102 15.2786 29.1909 15.8702 29.9645C16.4484 30.7208 17.1619 31.4222 18.0104 32.0687"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M25.2139 20.0263C28.9697 12.2746 31.177 7.70509 31.8358 6.31762C32.8851 4.10779 35.0156 3.57602 36.9808 4.41557C38.9459 5.25511 39.7411 7.65816 38.9162 9.33298C38.4068 10.3674 36.6766 13.9244 33.7258 20.0039"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
