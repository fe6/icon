/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdSwitcher = IconWrapper(
  'antd-switcher',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M4.32,43.68 L36,43.68 L36,12 L4.32,12 L4.32,43.68 Z M11.28,26.28 L29.04,26.28 L29.04,30.12 L11.28,30.12 L11.28,26.28 Z"
        fill={props.colors[1]}
      />
      <path
        d="M46.08,0 L9.12,0 C8.856,0 8.64,0.216 8.64,0.48 L8.64,3.84 C8.64,4.104 8.856,4.32 9.12,4.32 L43.68,4.32 L43.68,38.88 C43.68,39.144 43.896,39.36 44.16,39.36 L47.52,39.36 C47.784,39.36 48,39.144 48,38.88 L48,1.92 C48,0.858 47.142,0 46.08,0 Z"
        fill={props.colors[0]}
      />
      <path
        d="M38.4,7.68 L1.92,7.68 C0.858,7.68 0,8.538 0,9.6 L0,46.08 C0,47.142 0.858,48 1.92,48 L38.4,48 C39.462,48 40.32,47.142 40.32,46.08 L40.32,9.6 C40.32,8.538 39.462,7.68 38.4,7.68 Z M36,43.68 L4.32,43.68 L4.32,12 L36,12 L36,43.68 Z"
        fill={props.colors[0]}
      />
      <polygon
        fill={props.colors[2]}
        points="11.28 26.28 29.04 26.28 29.04 30.12 11.28 30.12"
      />
    </svg>
  ),
);
export default AntdSwitcher;
