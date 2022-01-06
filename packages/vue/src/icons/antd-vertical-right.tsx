/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'antd-vertical-right',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill={props.colors[0]}
        d="M4.85382335,0.539853786 L0.539313706,0.539853786 C0.242691168,0.539853786 0,0.782544953 0,1.07916749 L0,47.4601462 C0,47.7567688 0.242691168,47.9994599 0.539313706,47.9994599 L4.85382335,47.9994599 C5.15044589,47.9994599 5.39313706,47.7567688 5.39313706,47.4601462 L5.39313706,1.07916749 C5.39313706,0.782544953 5.15044589,0.539853786 4.85382335,0.539853786 Z M34.785734,5.42064283 L34.785734,0.539853786 C34.785734,0.0814371355 34.2531618,-0.167995454 33.9026078,0.128627085 L5.46055127,24 L33.9026078,47.8713729 C34.2531618,48.1679955 34.785734,47.9185629 34.785734,47.4601462 L34.785734,42.5793572 C34.785734,41.9456636 34.5025943,41.3389357 34.017212,40.9277089 L13.8468794,24 L34.017212,7.07229105 C34.5025943,6.66106435 34.785734,6.05433643 34.785734,5.42064283 L34.785734,5.42064283 Z"
      />
    </svg>
  ),
);
