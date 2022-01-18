/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdShrink = IconWrapper(
  'antd-shrink',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill={props.colors[0]}
        d="M47.8491961,3.05935957 L44.9397598,0.149923263 C44.737881,-0.049974421 44.4126668,-0.049974421 44.210788,0.149923263 L34.0503397,10.3168226 L30.5215998,6.78808282 C30.3826764,6.64923012 30.1765857,6.60204809 29.9910886,6.66662854 C29.8055915,6.731209 29.6733605,6.89617714 29.6507043,7.0912835 L28.1347009,19.2902725 C28.0959944,19.6257286 28.3733908,19.903125 28.7088468,19.8644185 L40.914287,18.3484151 C41.3400581,18.2968065 41.5142373,17.7807202 41.2174876,17.4775195 L37.6887478,13.9487797 L47.8556472,3.78188034 C48.0491796,3.58834799 48.0491796,3.259343 47.8491961,3.05935957 Z M19.2902725,28.1347009 L7.08483242,29.6507043 C6.65906126,29.7023129 6.48488214,30.2248502 6.78163174,30.5215998 L10.3103716,34.0503397 L0.149923263,44.210788 C-0.049974421,44.4126668 -0.049974421,44.737881 0.149923263,44.9397598 L3.05935957,47.8491961 C3.259343,48.0491796 3.58834799,48.0491796 3.78833142,47.8491961 L13.9552308,37.6822967 L17.4839706,41.2110366 C17.6228941,41.3498893 17.8289848,41.3970713 18.0144819,41.3324908 C18.1999789,41.2679104 18.33221,41.1029423 18.3548662,40.9078359 L19.8644185,28.7088468 C19.886074,28.5509213 19.8325899,28.3919599 19.7198747,28.2792447 C19.6071595,28.1665295 19.4481981,28.1130454 19.2902725,28.1347009 Z"
      />
    </svg>
  ),
);
export default AntdShrink;
