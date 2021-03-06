/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedMessageUnread = IconWrapper(
  'byted-message-unread',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M44 16V36H29L24 41L19 36H4V6H34"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M23 20H25.0025"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M33.0011 20H35"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M13.001 20H14.9999"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <circle cx="43" cy="7" r="3" fill={props.colors[0]} />
    </svg>
  ),
);
export default BytedMessageUnread;
