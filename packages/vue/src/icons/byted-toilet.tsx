/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedToilet = IconWrapper(
  'byted-toilet',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M19.9989 10H27.9989V22H19.9989V10Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M17 35L12 44H11.9989H35.9989L31 35"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M33.9989 22V5C33.9989 4.44772 33.5512 4 32.9989 4H14.9989C14.4466 4 13.9989 4.44772 13.9989 5V22"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M6.0798 22.364C6.03828 22.1772 6.18044 22 6.37181 22H41.6259C41.8173 22 41.9595 22.1772 41.918 22.3641V22.3641C40.694 27.8723 37.2834 32.8158 31.9185 34.5641C29.4347 35.3735 26.6548 36 24 36C21.3448 36 18.5641 35.3733 16.0795 34.5637C10.7147 32.8154 7.30383 27.8722 6.0798 22.364V22.364Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
    </svg>
  ),
);
export default BytedToilet;
