/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdSwapRight = IconWrapper(
  'antd-swap-right',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill={props.colors[0]}
        d="M47.5494498,29.3607034 L36.8539214,15.795643 C36.4587604,15.293931 35.8556281,15.000775 35.2169838,15 L30.9909457,15 C30.5539943,15 30.3126927,15.5021681 30.5800809,15.8478163 L39.9908416,27.7824608 L0.521733093,27.7824608 C0.234779892,27.7824608 0,28.0172407 0,28.3041939 L0,32.2171921 C0,32.5041453 0.234779892,32.7389252 0.521733093,32.7389252 L45.9059905,32.7389252 C47.6537964,32.7389252 48.6255243,30.7302528 47.5494498,29.3607034 Z"
      />
    </svg>
  ),
);
export default AntdSwapRight;
