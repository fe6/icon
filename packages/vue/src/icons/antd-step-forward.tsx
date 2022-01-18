/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdStepForward = IconWrapper(
  'antd-step-forward',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M35.5272727,25.1556818 L9.4,45.6797727 C8.42840909,46.4434091 7,45.7547727 7,44.5240909 L7,3.47522727 C7,2.24454545 8.42840909,1.55659091 9.4,2.32022727 L35.5272727,22.8443182 C35.8825342,23.122564 36.0900808,23.5487446 36.0900808,24 C36.0900808,24.4512554 35.8825342,24.877436 35.5272727,25.1556818 M36.7272727,48 L41.0909091,48 C41.3921553,48 41.6363636,47.7557917 41.6363636,47.4545455 L41.6363636,0.545454545 C41.6363636,0.244208318 41.3921553,0 41.0909091,0 L36.7272727,0 C36.4260265,0 36.1818182,0.244208318 36.1818182,0.545454545 L36.1818182,47.4545455 C36.1818182,47.7557917 36.4260265,48 36.7272727,48"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
export default AntdStepForward;
