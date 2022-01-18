/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdBgColors = IconWrapper(
  'antd-bg-colors',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill={props.colors[0]}
        d="M37.7571688,38.3241485 C40.2785446,38.3241485 42.3383412,36.2355032 42.3383412,33.679509 C42.3383412,30.5926989 37.7571688,25.5557172 37.7571688,25.5557172 C37.7571688,25.5557172 33.1759964,30.5926989 33.1759964,33.679509 C33.1759964,36.2355032 35.2357931,38.3241485 37.7571688,38.3241485 Z M15.9994849,35.7796938 C16.4091363,36.1893453 17.0726563,36.1893453 17.476538,35.7796938 L32.2528383,21.0091632 C32.6624897,20.5995118 32.6624897,19.9359919 32.2528383,19.5321102 L17.4823077,4.76157959 C17.4476893,4.72696116 17.4073011,4.69234273 17.3669129,4.66349404 L12.8549774,0.151558522 C12.6502718,-0.0505195074 12.3211564,-0.0505195074 12.1164509,0.151558522 L9.34697639,2.92103301 C9.14489836,3.12573858 9.14489836,3.45485396 9.34697639,3.65955954 L13.2242407,7.53682382 L1.23472404,19.5321102 C0.825072607,19.9417616 0.825072607,20.6052815 1.23472404,21.0091632 L15.9994849,35.7796938 Z M16.7437812,9.89664687 L27.0658434,20.2187091 L6.4274887,20.2187091 L16.7437812,9.89664687 L16.7437812,9.89664687 Z M45.696329,42.461051 L0.461579081,42.461051 C0.207710586,42.461051 0,42.6687616 0,42.9226301 L0,47.5384209 C0,47.7922894 0.207710586,48 0.461579081,48 L45.696329,48 C45.9501975,48 46.1579081,47.7922894 46.1579081,47.5384209 L46.1579081,42.9226301 C46.1579081,42.6687616 45.9501975,42.461051 45.696329,42.461051 Z"
      />
    </svg>
  ),
);
export default AntdBgColors;
