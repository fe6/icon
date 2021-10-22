/**
 * @format
 * @file index 样式文件
 * @author 由 fe6 自动生成
 */

export default `
.i-icon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.i-icon-spin svg {
  animation: i-icon-spin 1s infinite linear;
}

.i-icon-rtl {
  transform: scaleX(-1);
}

@keyframes i-icon-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

@-webkit-keyframes i-icon-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

`;
