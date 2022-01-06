/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'antd-code-sandbox',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill={props.colors[0]}
        d="M32.1980769,6.57692308 L32.2211538,6.56538462 L32.2326923,6.56538462 L20.7980769,0 L9.36923077,6.56538462 L9.35769231,6.56538462 L9.39807692,6.58269231 L0,12 L0,36 L20.7980769,48 L41.5961538,36 L41.5961538,12 L32.1980769,6.57692308 Z M19.1076923,43.1307692 L10.8519231,38.3653846 L10.8519231,30.3115385 L3.375,26.0653846 L3.375,15.975 L19.1076923,25.05 L19.1076923,43.1307692 Z M5.00192308,13.0096154 L12.7730769,8.52115385 L20.7865385,13.1192308 L28.8115385,8.50961538 L36.6115385,13.0096154 L20.8096154,22.125 L5.00192308,13.0096154 Z M38.2211538,26.0942308 L30.7903846,30.3115385 L30.7903846,38.3365385 L22.4884615,43.125 L22.4884615,25.0615385 L38.2211538,15.9865385 L38.2211538,26.0942308 Z"
      />
    </svg>
  ),
);
