/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdCaretUp = IconWrapper(
  'antd-caret-up',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M47.6513097,36.5199429 L25.2613123,10.5573637 C24.6204293,9.81421211 23.3863886,9.81421211 22.7386877,10.5573637 L0.34869034,36.5199429 C-0.483093972,37.4880852 0.26687549,38.9062093 1.61000262,38.9062093 L46.3899974,38.9062093 C47.7331245,38.9062093 48.483094,37.4880852 47.6513097,36.5199429 Z"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
export default AntdCaretUp;
