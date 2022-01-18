/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdVerticalLeft = IconWrapper(
  'antd-vertical-left',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M41.2471275,0.538907092 L36.9325318,0.538907092 C36.6359034,0.538907092 36.3932074,0.781603101 36.3932074,1.07823156 L36.3932074,47.4601354 C36.3932074,47.7567639 36.6359034,47.9994599 36.9325318,47.9994599 L41.2471275,47.9994599 C41.543756,47.9994599 41.786452,47.7567639 41.786452,47.4601354 L41.786452,1.07823156 C41.786452,0.781603101 41.543756,0.538907092 41.2471275,0.538907092 Z M7.00000792,0.538907092 L7.00000792,5.41979349 C7.00000792,6.06024129 7.28316944,6.66023976 7.76856146,7.07147466 L27.9392964,23.9995213 L7.76856146,40.9275679 C7.28316944,41.3388028 7.00000792,41.9388012 7.00000792,42.579249 L7.00000792,47.4601354 C7.00000792,47.9185612 7.53260701,48.1679988 7.88316791,47.8713703 L36.3257918,23.9995213 L7.88316791,0.127672189 C7.72360214,-0.00801840618 7.49961125,-0.0383190673 7.30972882,0.050099466 C7.1198464,0.138517999 6.99887272,0.32945102 7.00000792,0.538907092 Z"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
export default AntdVerticalLeft;
