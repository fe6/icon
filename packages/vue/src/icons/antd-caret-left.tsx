/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdCaretLeft = IconWrapper(
  'antd-caret-left',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M36.5199429,0.34869034 L10.5573637,22.7386877 C9.81421211,23.3795707 9.81421211,24.6136114 10.5573637,25.2613123 L36.5199429,47.6513097 C37.4880852,48.483094 38.9062093,47.7331245 38.9062093,46.3899974 L38.9062093,1.61000262 C38.9062093,0.26687549 37.4880852,-0.483093972 36.5199429,0.34869034 Z"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
export default AntdCaretLeft;
