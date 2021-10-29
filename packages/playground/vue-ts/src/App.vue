<!-- @format -->

<template>
  <h1>cube vue 所有</h1>
  -{{ colorDiy }}-<br />
  <button @click="() => setColor(true)">设置颜色</button>
  <br />
  当前主题: {{ themeNow }}<br /><button
    v-for="tItem in themeIcon"
    :key="tItem"
    @click="setTheme(tItem)"
  >
    主题 {{ tItem }}
  </button>
  <br />
  <br />
  <div>
    <h3>img</h3>
    <img :src="imgIcon" :key="idx" v-for="(imgIcon, idx) in imgGroup" />
    <h3>svg</h3>
    <span v-for="icon in iconConfig">
      <icon-keg
        :size="100"
        :type="icon.type"
        :theme="themeNow"
        :colors="colorDiy"
      />
    </span>
  </div>
  <h1>定制款</h1>
  <icon-cube :id="94479" :size="200" />
  <CubeVideo />
  <h3>img 通过 svg 渲染</h3>
  <img :src="diySvgHtml" />
  <h1>img 版</h1>
  <h4>定制属性</h4>
  <span v-html="vIconDef" />
  <h4>定制属性</h4>
  <span v-html="vIconProps" />
  <h4>默认主题</h4>
  Filled<img :src="vIconFilled" /> Outline<span v-html="vIconOutline" />
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
  <icon-keg type="IconVideo" theme="twoTone" />

  <h1>全局注册 vue 版</h1>
  <br />
  <i-video :size="100" />
  <h4>颜色</h4>
  默认主题: outline<i-video :size="100" :colors="myColors" /> filled<i-video
    :size="100"
    theme="filled"
    :colors="myColors"
  />
  outline<i-video :size="100" theme="outline" :colors="myColors" />
  twoTone<i-video :size="100" theme="twoTone" :colors="myColors" />
  multiColor<i-video :size="100" theme="multiColor" :colors="myColors" />
</template>

<script setup lang="ts">
  // 单文件组件(SFC) <script setup>
  // Check out https://v3.cn.vuejs.org/api/sfc-script-setup.html

  import { ref } from 'vue';

  import {
    IconVideo as VueVideo,
    DEFAULT_ICON_CONFIGS,
    IconProvider,
  } from '@fe6/icon-vue';

  import {
    IconVideo,
    setConfig,
    iconKeg as ImgKeg,
    DEFAULT_ICON_CONFIGS as imgConfig,
    iconKeg as waterImgIcon,
  } from '@fe6/icon-img';
  import {
    IconVideo as CubeVideo,
    IconKeg,
    TCubeTheme,
  } from '@fe6/icon-cube-vue';

  import iconJson from '@fe6/icons.json';

  import { diySvg } from './diy';
  import './custom-config';

  const iconConfig = iconJson.slice();

  const myColors = ['#f00', '#f0f', '#00f', '#0f0'];

  const myDefColors: string[] = ['#0f0', '#2f88ff', '#fff', '#43ccf8'];

  const vIconDef = IconVideo();

  const vIconProps = IconVideo({
    size: 100,
    strokeLinejoin: 'bevel',
    strokeLinecap: 'square',
  });

  const vIconFilled = IconVideo({
    size: 100,
    theme: 'filled',
    base64: true,
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
    colors: myColors,
    theme: 'filled',
  });

  const vIconThemeOutline = IconVideo({
    size: 100,
    colors: myColors,
    theme: 'outline',
  });

  const vIconThemeTwoTone = IconVideo({
    size: 100,
    colors: myColors,
    theme: 'twoTone',
  });

  const vIconThemeMultiColor = IconVideo({
    size: 100,
    colors: myColors,
    theme: 'multiColor',
  });

  IconProvider({ ...DEFAULT_ICON_CONFIGS, prefix: 'icon', size: '3em' });
  setConfig({ ...imgConfig, prefix: 'icon', size: '13em' });

  const themeIcon = Object.keys(DEFAULT_ICON_CONFIGS.colors);

  const colorDiy = ref(myDefColors.slice());
  const colorIsDef = ref(true);
  const themeNow = ref(themeIcon[0]);

  const setColor = (is?: boolean) => {
    colorIsDef.value = !colorIsDef.value;
    switch (themeNow.value) {
      case 'twoTone':
        colorDiy.value = (is ? myColors : myDefColors).slice(0, 2);
        break;
      case 'multiColor':
        colorDiy.value = (is ? myColors : myDefColors).slice();
        break;

      default:
        colorDiy.value = (is ? myColors : myDefColors).slice(0, 1);
        break;
    }
    renderImgBase64();
    renderDiyBase64();
  };

  const setTheme = (newTheme: typeof TCubeTheme) => {
    themeNow.value = newTheme;
    renderImgBase64();
    renderDiyBase64();
  };

  // 生成 img base64
  const imgGroup = ref<string[]>([]);
  const renderImgBase64 = () => {
    imgGroup.value = [];
    iconConfig.forEach(({ type, svg }: any) => {
      imgGroup.value.push(
        waterImgIcon({
          size: 100,
          theme: themeNow.value,
          svg,
          colors: colorDiy.value,
          base64: true,
        }),
      );
    });
  };

  renderImgBase64();

  const diySvgHtml = ref('');

  const renderDiyBase64 = () => {
    diySvgHtml.value = ImgKeg({
      size: 200,
      theme: themeNow.value,
      colors: colorDiy.value,
      svg: diySvg,
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      base64: true,
    });
  };
  renderDiyBase64();
  setColor();
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
