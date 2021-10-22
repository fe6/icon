<!-- @format -->

<template>
  <h1>定制款</h1>
  <icon-cube :id="94479" :size="200" />
  <CubeVideo />
  <h1>img 版</h1>
  <h4>定制属性</h4>
  <span v-html="vIconDef" />
  <h4>定制属性</h4>
  <span v-html="vIconProps" />
  <h4>默认主题</h4>
  Filled<span v-html="vIconFilled" /> Outline<span v-html="vIconOutline" />
  TwoTone<span v-html="vIconTwoTone" /> MultiColor<span
    v-html="vIconMultiColor"
  />
  <h4>主题定制颜色</h4>
  <span v-html="vIconThemeFilled" />
  <span v-html="vIconThemeOutline" />
  <span v-html="vIconThemeTwoTone" />
  <span v-html="vIconThemeMultiColor" />
  <br />
  <h1>全局注册 img 版</h1>
  <br />
  <p>暂不支持</p>
  <br />
  <h1>vue 版</h1>
  <vue-video />
  <h4>默认主题</h4>
  <vue-video :size="100" theme="filled" />
  <vue-video :size="100" theme="outline" />
  <vue-video :size="100" theme="twoTone" />
  <vue-video :size="100" theme="multiColor" />
  <br />
  <h4>定制属性</h4>
  <vue-video :size="80" :strokeWidth="2" theme="filled" />
  <vue-video
    :size="80"
    :strokeWidth="2"
    strokeLinejoin="miter"
    strokeLinecap="round"
    theme="outline"
  />
  <vue-video
    :size="80"
    :strokeWidth="2"
    strokeLinejoin="round"
    strokeLinecap="butt"
    theme="twoTone"
  />
  <vue-video
    :size="80"
    :strokeWidth="2"
    strokeLinejoin="bevel"
    strokeLinecap="square"
    theme="multiColor"
  />
  <h4>使用 Icon 组件</h4>
  <water-icon type="IconVideo" theme="twoTone" />

  <h1>全局注册 vue 版</h1>
  <br />
  <i-video :size="100" />
  <h4>颜色</h4>
  <i-video :size="100" :colors="myColors" />
  <i-video :size="100" theme="filled" :fill="myColors" />
  <i-video :size="100" theme="outline" :fill="myColors" />
  <i-video :size="100" theme="twoTone" :fill="myColors" />
  <i-video :size="100" theme="multiColor" :fill="myColors" />
</template>

<script setup lang="ts">
  // 单文件组件(SFC) <script setup>
  // Check out https://v3.cn.vuejs.org/api/sfc-script-setup.html
  import './custom-config';
  import {
    IconVideo as VueVideo,
    DEFAULT_ICON_CONFIGS,
    IconProvider,
    WaterIcon,
  } from '@fe6/icon-vue';

  import {
    IconVideo,
    setConfig,
    DEFAULT_ICON_CONFIGS as imgConfig,
  } from '@fe6/icon-img';
  import { IconVideo as CubeVideo } from '@fe6/icon-cube-vue';

  const myColors = ['#f00', '#f0f', '#00f', '#0f0'];

  const vIconDef = IconVideo();

  const vIconProps = IconVideo({
    size: 100,
    strokeLinejoin: 'bevel',
    strokeLinecap: 'square',
  });

  const vIconFilled = IconVideo({
    size: 100,
    theme: 'filled',
  });

  const vIconOutline = IconVideo({
    size: 100,
    theme: 'outline',
  });

  const vIconTwoTone = IconVideo({
    size: 100,
    theme: 'twoTone',
  });

  const vIconMultiColor = IconVideo({
    size: 100,
    theme: 'multiColor',
  });

  const vIconThemeFilled = IconVideo({
    size: 100,
    fill: myColors,
    theme: 'filled',
  });

  const vIconThemeOutline = IconVideo({
    size: 100,
    fill: myColors,
    theme: 'outline',
  });

  const vIconThemeTwoTone = IconVideo({
    size: 100,
    fill: myColors,
    theme: 'twoTone',
  });

  const vIconThemeMultiColor = IconVideo({
    size: 100,
    fill: myColors,
    theme: 'multiColor',
  });

  IconProvider({ ...DEFAULT_ICON_CONFIGS, prefix: 'icon', size: '3em' });
  setConfig({ ...imgConfig, prefix: 'icon', size: '13em' });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
