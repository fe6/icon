/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedWeixinTopStories = IconWrapper(
  'byted-weixin-top-stories',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 4L31.2 11.5292L41.3205 14L38.4 24L41.3205 34L31.2 36.4708L24 44L16.8 36.4708L6.67949 34L9.6 24L6.67949 14L16.8 11.5292L24 4Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M30.9773 11.915L31.3719 19.7439L37.9545 24L31.3719 28.2561L30.9773 36.0849L24 32.5122L17.0228 36.0849L16.6282 28.2561L10.0455 24L16.6282 19.7439L17.0228 11.915L24 15.4877L30.9773 11.915Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedWeixinTopStories;
