/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'antd-caret-right',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill={props.colors[0]}
        d="M28.3488457,22.7386877 L2.38626647,0.34869034 C1.41812407,-0.483093972 0,0.26687549 0,1.61000262 L0,46.3899974 C0,47.7331245 1.41812407,48.483094 2.38626647,47.6513097 L28.3488457,25.2613123 C29.0919972,24.6204293 29.0919972,23.3795707 28.3488457,22.7386877 Z"
      />
    </svg>
  ),
);
