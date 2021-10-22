/** @format */

import { defineCustomElement } from 'vue';

export interface ISVGValueData {
  content: string;
  viewBox: string;
}

export interface ISVGCustomData {
  [key: number | string]: ISVGValueData;
}

export const MyVueElement = defineCustomElement({
  name: 'water-cube',
  props: {
    id: {
      type: [Number, String],
    },
  },
  render() {
    const IconCube = (window as any).__IconCube__;
    const svgItem = this.id && IconCube ? IconCube[this.id] : null;
    const svgContent = svgItem
      ? `<svg viewBox="${svgItem.viewBox}">${svgItem.content}</svg>`
      : '';
    return <span class="sss" v-html={svgContent}></span>;
  },
  // 只用于 defineCustomElement：注入到 shadow root 中的 CSS
  styles: [
    `
    .sss {
      color: red;
      width:100px;
      height:100px;
      background: green;
    }
  `,
  ],
});

if (customElements && typeof customElements.define === 'function') {
  customElements.define('my-vue-element', MyVueElement);
}
