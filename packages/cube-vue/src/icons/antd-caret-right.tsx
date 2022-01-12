/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'antd-caret-right',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M38.3488457,22.7386877 L12.3862665,0.34869034 C11.4181241,-0.483093972 10,0.26687549 10,1.61000262 L10,46.3899974 C10,47.7331245 11.4181241,48.483094 12.3862665,47.6513097 L38.3488457,25.2613123 C39.0919972,24.6204293 39.0919972,23.3795707 38.3488457,22.7386877 Z"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
