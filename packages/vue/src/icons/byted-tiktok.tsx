/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTiktok = IconWrapper(
  'byted-tiktok',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M21.3583 19.14C15.4696 18.8559 11.3764 20.9554 9.07862 25.4385C5.63194 32.1631 8.48051 43.1666 19.9791 43.1666C31.4776 43.1666 31.8103 32.0555 31.8103 30.8915C31.8103 30.1154 31.8103 25.7765 31.8103 17.8746C34.2697 19.4324 36.3433 20.3701 38.031 20.6877C39.7188 21.0054 40.7918 21.1462 41.2499 21.1101V14.6343C39.6888 14.4461 38.3388 14.0874 37.1999 13.5582C35.4915 12.7643 32.104 10.5612 32.104 7.33214C32.1063 7.34793 32.1063 6.51499 32.104 4.83331H24.9859C24.9648 20.6494 24.9648 29.3354 24.9859 30.8915C25.0177 33.2255 23.207 36.4905 19.5358 36.4905C15.8645 36.4905 14.0538 33.2282 14.0538 31.1239C14.0538 29.8357 14.4962 27.9685 16.3253 26.5858C17.41 25.7659 18.9155 25.4385 21.3583 25.4385C21.3583 24.6829 21.3583 22.5834 21.3583 19.14Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedTiktok;
