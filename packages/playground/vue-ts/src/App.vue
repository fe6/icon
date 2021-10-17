<!-- @format -->

<template>
  <Video />
  <br />
  <Video :colors="['#f00', '#f0f', '#00f', '#0f0']" />
  <br />
  <Video theme="filled" />
  <Video theme="outline" />
  <Video theme="twoTone" />
  <Video theme="multiColor" />

  <br />
  <icon-video :size="100" />
  <br />
  <icon-video :size="100" :colors="['#f00', '#f0f', '#00f', '#0f0']" />
  <br />
  <icon-video :size="100" theme="filled" />
  <icon-video :size="100" theme="outline" />
  <icon-video :size="100" theme="twoTone" />
  <icon-video :size="100" theme="multiColor" />
</template>

<script setup lang="ts">
  // 单文件组件(SFC) <script setup>
  // Check out https://v3.cn.vuejs.org/api/sfc-script-setup.html
  import { Video, DEFAULT_ICON_CONFIGS, IconProvider } from '@fe6/icon-vue';

  IconProvider({ ...DEFAULT_ICON_CONFIGS, prefix: 'icon', size: '3em' });
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
