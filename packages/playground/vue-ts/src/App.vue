<!-- @format -->

<template>
  <Video :size="100" />
  <br />
  <Video :size="100" :colors="['#f00', '#f0f', '#00f', '#0f0']" />
  <br />
  <Video :size="100" theme="filled" />
  <Video :size="100" theme="outline" />
  <Video :size="100" theme="twoTone" />
  <Video :size="100" theme="multiColor" />

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
  import { Video } from '@fe6/icon-vue';
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
