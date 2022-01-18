/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdPlayCircle = IconWrapper(
  'antd-play-circle',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24,0 C10.7464286,0 0,10.7464286 0,24 C0,37.2535714 10.7464286,48 24,48 C37.2535714,48 48,37.2535714 48,24 C48,10.7464286 37.2535714,0 24,0 Z M24,43.9285714 C12.9964286,43.9285714 4.07142857,35.0035714 4.07142857,24 C4.07142857,12.9964286 12.9964286,4.07142857 24,4.07142857 C35.0035714,4.07142857 43.9285714,12.9964286 43.9285714,24 C43.9285714,35.0035714 35.0035714,43.9285714 24,43.9285714 Z"
        fill={props.colors[0]}
      />
      <path
        d="M24,4.07142857 C12.9964286,4.07142857 4.07142857,12.9964286 4.07142857,24 C4.07142857,35.0035714 12.9964286,43.9285714 24,43.9285714 C35.0035714,43.9285714 43.9285714,35.0035714 43.9285714,24 C43.9285714,12.9964286 35.0035714,4.07142857 24,4.07142857 Z M32.7910714,24.3321429 L21.0910714,32.8446429 C20.9602989,32.9386128 20.7879583,32.9515654 20.6446092,32.8781977 C20.50126,32.80483 20.4109734,32.6574619 20.410712,32.4964286 L20.410712,15.4821429 C20.410185,15.3207579 20.5003614,15.1727588 20.6440241,15.0992307 C20.7876869,15.0257025 20.9604748,15.0391136 21.0910714,15.1339286 L32.7910714,23.6410714 C32.9032357,23.7203955 32.9699184,23.8492276 32.9699184,23.9866071 C32.9699184,24.1239866 32.9032357,24.2528188 32.7910714,24.3321429 Z"
        fill={props.colors[1]}
      />
      <path
        d="M32.7910714,23.6410714 L21.0910714,15.1339286 C20.9604748,15.0391136 20.7876869,15.0257025 20.6440241,15.0992307 C20.5003614,15.1727588 20.410185,15.3207579 20.410712,15.4821429 L20.410712,32.4964286 C20.4109734,32.6574619 20.50126,32.80483 20.6446092,32.8781977 C20.7879583,32.9515654 20.9602989,32.9386128 21.0910714,32.8446429 L32.7910714,24.3321429 C32.9032357,24.2528188 32.9699184,24.1239866 32.9699184,23.9866071 C32.9699184,23.8492276 32.9032357,23.7203955 32.7910714,23.6410714 Z"
        fill={props.colors[2]}
      />
    </svg>
  ),
);
export default AntdPlayCircle;
