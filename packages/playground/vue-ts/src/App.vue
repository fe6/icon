<!-- @format -->

<template>
  <h1>img 版</h1>
  <Video :size="100" strokeLinejoin="bevel" strokeLinecap="square" />
  <h4>默认主题</h4>
  <Video :size="100" theme="filled" />
  <Video :size="100" theme="outline" />
  <Video :size="100" theme="twoTone" />
  <Video :size="100" theme="multiColor" />
  <h4>主题定制颜色</h4>
  <Video :size="100" theme="filled" :fill="['#f00', '#f0f', '#00f', '#0f0']" />
  <Video :size="100" theme="outline" :fill="['#f00', '#f0f', '#00f', '#0f0']" />
  <Video :size="100" theme="twoTone" :fill="['#f00', '#f0f', '#00f', '#0f0']" />
  <Video
    :size="100"
    theme="multiColor"
    :fill="['#f00', '#f0f', '#00f', '#0f0']"
  />
  <br />
  <h1>全局注册 img 版</h1>
  <br />
  <water-video
    :size="100"
    theme="filled"
    :fill="['#f00', '#f0f', '#00f', '#0f0']"
  />
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

  <h1>全局注册 vue 版</h1>
  <br />
  <icon-video :size="100" />
  <h4>颜色</h4>
  <icon-video :size="100" :colors="['#f00', '#f0f', '#00f', '#0f0']" />
  <icon-video
    :size="100"
    theme="filled"
    :fill="['#f00', '#f0f', '#00f', '#0f0']"
  />
  <icon-video
    :size="100"
    theme="outline"
    :fill="['#f00', '#f0f', '#00f', '#0f0']"
  />
  <icon-video
    :size="100"
    theme="twoTone"
    :fill="['#f00', '#f0f', '#00f', '#0f0']"
  />
  <icon-video
    :size="100"
    theme="multiColor"
    :fill="['#f00', '#f0f', '#00f', '#0f0']"
  />
</template>

<script setup lang="ts">
  // 单文件组件(SFC) <script setup>
  // Check out https://v3.cn.vuejs.org/api/sfc-script-setup.html
  import {
    Video as VueVideo,
    DEFAULT_ICON_CONFIGS,
    IconProvider,
  } from '@fe6/icon-vue';
  import {
    Video,
    setConfig,
    DEFAULT_ICON_CONFIGS as imgConfig,
  } from '@fe6/icon-img';

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
