/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdFile = IconWrapper(
  'antd-file',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M25.0357143,15.4285714 L25.0357143,3.85714286 L8.85714286,3.85714286 L8.85714286,44.1428571 L38.8571429,44.1428571 L38.8571429,17.6785714 L27.2857143,17.6785714 C26.0430736,17.6785714 25.0357143,16.6712121 25.0357143,15.4285714 Z"
        fill={props.colors[1]}
      />
      <path
        d="M42.2107143,12.0321429 L30.6821429,0.503571429 C30.3607143,0.182142857 29.9267857,0 29.4714286,0 L6.71428571,0 C5.76607143,0 5,0.766071429 5,1.71428571 L5,46.2857143 C5,47.2339286 5.76607143,48 6.71428571,48 L41,48 C41.9482143,48 42.7142857,47.2339286 42.7142857,46.2857143 L42.7142857,13.2482143 C42.7142857,12.7928571 42.5321429,12.3535714 42.2107143,12.0321429 Z M28.6785714,3.95357143 L38.7607143,14.0357143 L28.6785714,14.0357143 L28.6785714,3.95357143 Z M38.8571429,44.1428571 L8.85714286,44.1428571 L8.85714286,3.85714286 L25.0357143,3.85714286 L25.0357143,15.4285714 C25.0357143,16.6712121 26.0430736,17.6785714 27.2857143,17.6785714 L38.8571429,17.6785714 L38.8571429,44.1428571 Z"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
export default AntdFile;
