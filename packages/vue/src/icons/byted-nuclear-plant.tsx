/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedNuclearPlant = IconWrapper(
  'byted-nuclear-plant',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M4 44H44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M12 14H36"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M14 14H24H34L34.8772 21.0175C34.9589 21.6709 35.1049 22.3147 35.3131 22.9394L38.6474 32.9422C38.8817 33.6452 39.0372 34.3721 39.1109 35.1095L40 44H8L8.88905 35.1095C8.96279 34.3721 9.11826 33.6452 9.35259 32.9422L12.6869 22.9394C12.8951 22.3147 13.0411 21.6709 13.1228 21.0175L14 14Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 8L24.8284 7.17157C25.5786 6.42143 26.596 6 27.6569 6H28.3431C29.404 6 30.4214 5.57857 31.1716 4.82843L32 4"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M17 31C17 32.8728 17.7354 34.5738 18.9333 35.83C19.5891 36.5178 20.3836 37.0722 21.2718 37.4484"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M30.9999 31C30.9999 32.8728 30.2644 34.5738 29.0666 35.83C28.4107 36.5178 27.6163 37.0722 26.728 37.4484"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M18.9331 26.17C20.208 24.8331 22.0066 24 23.9998 24C25.993 24 27.7917 24.8331 29.0665 26.17"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <circle cx="24" cy="31" r="2" fill={props.colors[2]} />
    </svg>
  ),
);
export default BytedNuclearPlant;
