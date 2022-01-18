/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdSwapLeft = IconWrapper(
  'antd-swap-left',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill={props.colors[0]}
        d="M47.4782686,27.782419 L8.00928913,27.782419 L17.420019,15.8478135 C17.6874064,15.5086881 17.4461056,15 17.0091556,15 L12.7831313,15 C12.1440104,15 11.5374976,15.2934739 11.1461991,15.7956404 L0.450705647,29.3606564 C-0.62536534,30.7302013 0.34635937,32.7388672 2.08763788,32.7388672 L47.4782686,32.7388672 C47.7652209,32.7388672 48,32.5040881 48,32.2171358 L48,28.3041504 C48,28.0171981 47.7652209,27.782419 47.4782686,27.782419 Z"
      />
    </svg>
  ),
);
export default AntdSwapLeft;
