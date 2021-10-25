/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('phone', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 49" fill="none">
    <path
      d="M16.9963 7.68583C17.7228 7.68583 18.3922 8.07985 18.7449 8.71509L21.1913 13.1219C21.5116 13.6989 21.5267 14.3968 21.2315 14.9871L18.8747 19.7008C18.8747 19.7008 19.5577 23.2122 22.4161 26.0706C25.2746 28.929 28.7742 29.6002 28.7742 29.6002L33.4871 27.2438C34.0778 26.9484 34.7762 26.9637 35.3534 27.2846L39.7727 29.7416C40.4074 30.0945 40.8009 30.7635 40.8009 31.4896L40.8009 36.5631C40.8009 39.1468 38.401 41.0129 35.953 40.1868C30.925 38.4903 23.1203 35.2601 18.1735 30.3132C13.2267 25.3664 9.99643 17.5617 8.29989 12.5338C7.47387 10.0857 9.33996 7.68583 11.9236 7.68583L16.9963 7.68583Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
