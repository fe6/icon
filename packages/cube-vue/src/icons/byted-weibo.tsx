/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-weibo', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M12.5618 16.4109C9.21763 19.6608 2.16324 29.146 7.36253 35.9316C12.5618 42.7173 27.2821 40.0998 33.359 35.3192C39.4358 30.5387 38.836 27.5848 37.5184 26.2832C36.2009 24.9817 32.3556 26.297 31.2793 24.526C30.203 22.755 33.1957 18.331 30.6452 16.9311C28.0948 15.5312 23.6907 20.581 21.7015 19.2689C19.7122 17.9568 23.8906 13.6728 21.7015 12.4384C19.5123 11.2039 15.906 13.161 12.5618 16.4109Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M43.3787 16.5159C43.1435 13.3848 41.799 10.5632 39.7372 8.44277C37.7247 6.37311 35.0287 4.9715 32.0137 4.60229"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
    />
    <path
      d="M37.2919 16.9313C37.1627 15.2916 36.4247 13.8139 35.2928 12.7034C34.188 11.6195 32.7079 10.8855 31.0527 10.6921"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
    />
    <path
      d="M25 30C25 32.2091 22.3137 34 19 34C15.6863 34 13 32.2091 13 30C13 27.7909 15.6863 26 19 26C22.3137 26 25 27.7909 25 30Z"
      fill={props.colors[2]}
    />
  </svg>
));
