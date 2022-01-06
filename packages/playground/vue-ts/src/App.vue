<!-- @format -->

<template>
  <h1>cube vue 所有</h1>
  <div style="position: sticky; top: 0; left: 0">
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
  </div>
  <br />
  <br />
  <div>
    <h3>img</h3>
    <!-- <img :src="imgIcon" :key="idx" v-for="(imgIcon, idx) in imgGroup" /> -->
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
  <h1>定制款 - 显示不出来可能得注释 img 和 svg 的循环，因为图标太多了太慢了</h1>
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
  <icon-keg type="IconBytedVideo" theme="twoTone" />

  <h1>全局注册 vue 版</h1>
  <br />
  <i-byted-video :size="100" />
  <h4>颜色</h4>
  默认主题: outline<i-byted-video :size="100" :colors="myColors" />
  filled<i-byted-video :size="100" theme="filled" :colors="myColors" />
  outline<i-byted-video :size="100" theme="outline" :colors="myColors" />
  twoTone<i-byted-video :size="100" theme="twoTone" :colors="myColors" />
  multiColor<i-byted-video :size="100" theme="multiColor" :colors="myColors" />
</template>

<script setup lang="ts">
  // 单文件组件(SFC) <script setup>
  // Check out https://v3.cn.vuejs.org/api/sfc-script-setup.html

  import { ref } from 'vue';

  import {
    // IconAntdAlert as VueVideo,
    IconBytedCrown as VueVideo,
    DEFAULT_ICON_CONFIGS,
    IconProvider,
  } from '@fe6/icon-vue';
  import {
    IconBytedVideo,
    setConfig,
    iconKeg as ImgKeg,
    DEFAULT_ICON_CONFIGS as imgConfig,
    iconKeg as waterImgIcon,
  } from '@fe6/icon-img';
  import {
    IconBytedVideo as CubeVideo,
    IconKeg,
    TCubeTheme,
  } from '@fe6/icon-cube-vue';

  import iconJson from '@fe6/icons.json';

  import { diySvg } from './diy';
  import './custom-config';

  const iconConfig = iconJson.slice();

  const myColors = ['#f00', '#f0f', '#00f', '#0f0'];

  const myDefColors: string[] = ['#0f0', '#2f88ff', '#fff', '#43ccf8'];

  const vIconDef = IconBytedVideo();

  const vIconProps = IconBytedVideo({
    size: 100,
    strokeLinejoin: 'bevel',
    strokeLinecap: 'square',
  });

  const vIconFilled = IconBytedVideo({
    size: 100,
    theme: 'filled',
    base64: true,
  });
  const vIconOutline = IconBytedVideo({
    size: 100,
    theme: 'outline',
  });

  const vIconTwoTone = IconBytedVideo({
    size: 100,
    theme: 'twoTone',
  });

  const vIconMultiColor = IconBytedVideo({
    size: 100,
    theme: 'multiColor',
  });

  const vIconThemeFilled = IconBytedVideo({
    size: 100,
    colors: myColors,
    theme: 'filled',
  });

  const vIconThemeOutline = IconBytedVideo({
    size: 100,
    colors: myColors,
    theme: 'outline',
  });

  const vIconThemeTwoTone = IconBytedVideo({
    size: 100,
    colors: myColors,
    theme: 'twoTone',
  });

  const vIconThemeMultiColor = IconBytedVideo({
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
    // iconConfig.forEach(({ type, svg }: any) => {
    //   imgGroup.value.push(
    //     waterImgIcon({
    //       size: 100,
    //       theme: themeNow.value,
    //       svg,
    //       colors: colorDiy.value,
    //       base64: true,
    //     }),
    //   );
    // });
    imgGroup.value.push(
      waterImgIcon({
        size: 100,
        theme: themeNow.value,
        // svg: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"48\" height=\"48\" fill=\"white\" fill-opacity=\"0.01\"/>\n  <path fill=\"#000\" d=\"M42.6808375,5.59188348 L13.5678701,5.59188348 L13.5678701,0.546544863 C13.5678701,0.0897371773 13.0428821,-0.162529754 12.6883448,0.117009278 L3.0067491,7.75319746 C2.87465267,7.85657901 2.79747099,8.01499155 2.79747099,8.18273305 C2.79747099,8.35047455 2.87465267,8.50888709 3.0067491,8.61226863 L12.6883448,16.2484568 C13.0428821,16.5279958 13.5678701,16.2757289 13.5678701,15.8189212 L13.5678701,10.7735826 L41.8626745,10.7735826 L41.8626745,42.8183009 L0.545442013,42.8183009 C0.245448906,42.8183009 0,43.0637498 0,43.3637429 L0,47.454558 C0,47.7545511 0.245448906,48 0.545442013,48 L42.6808375,48 C45.0876004,48 47.0443736,46.0432268 47.0443736,43.6364639 L47.0443736,9.95541959 C47.0443736,7.54865671 45.0876004,5.59188348 42.6808375,5.59188348 Z\"></path>\n</svg>\n",
        svg: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>\n  <path d="M36,11.52 C36,11.784 35.784,12 35.52,12 L32.16,12 C31.896,12 31.68,11.784 31.68,11.52 L31.68,8.64 L16.32,8.64 L16.32,11.52 C16.32,11.784 16.104,12 15.84,12 L12.48,12 C12.216,12 12,11.784 12,11.52 L12,8.64 L4.32,8.64 L4.32,43.68 L43.68,43.68 L43.68,8.64 L36,8.64 L36,11.52 Z M32.064,18.828 L26.706,28.674 L29.652,28.674 C29.916,28.674 30.132,28.89 30.132,29.154 L30.132,30.432 C30.132,30.696 29.916,30.912 29.652,30.912 L25.728,30.912 L25.728,32.934 L29.652,32.934 C29.916,32.934 30.132,33.15 30.132,33.414 L30.132,34.692 C30.132,34.956 29.916,35.172 29.652,35.172 L25.728,35.172 L25.728,38.4 C25.728,38.664 25.512,38.88 25.248,38.88 L22.77,38.88 C22.506,38.88 22.29,38.664 22.29,38.4 L22.29,35.172 L18.384,35.172 C18.12,35.172 17.904,34.956 17.904,34.692 L17.904,33.414 C17.904,33.15 18.12,32.934 18.384,32.934 L22.29,32.934 L22.29,30.912 L18.384,30.912 C18.12,30.912 17.904,30.696 17.904,30.432 L17.904,29.154 C17.904,28.89 18.12,28.674 18.384,28.674 L21.3,28.674 L15.942,18.834 C15.816,18.6 15.9,18.306 16.134,18.18 C16.2,18.138 16.284,18.12 16.362,18.12 L19.122,18.12 C19.3023153,18.1209983 19.4668596,18.2229694 19.548,18.384 L23.952,27.108 L24.12,27.108 L28.524,18.384 C28.602,18.222 28.77,18.12 28.95,18.12 L31.65,18.12 C31.92,18.12 32.13,18.336 32.1241254,18.6 C32.1241254,18.678 32.1,18.756 32.064,18.828 L32.064,18.828 Z" fill="#2F88FF"></path>\n  <path d="M31.65,18.12 L28.95,18.12 C28.77,18.12 28.602,18.222 28.524,18.384 L24.12,27.108 L23.952,27.108 L19.548,18.384 C19.4668596,18.2229694 19.3023153,18.1209983 19.122,18.12 L16.362,18.12 C16.284,18.12 16.2,18.138 16.134,18.18 C15.9,18.306 15.816,18.6 15.942,18.834 L21.3,28.674 L18.384,28.674 C18.12,28.674 17.904,28.89 17.904,29.154 L17.904,30.432 C17.904,30.696 18.12,30.912 18.384,30.912 L22.29,30.912 L22.29,32.934 L18.384,32.934 C18.12,32.934 17.904,33.15 17.904,33.414 L17.904,34.692 C17.904,34.956 18.12,35.172 18.384,35.172 L22.29,35.172 L22.29,38.4 C22.29,38.664 22.506,38.88 22.77,38.88 L25.248,38.88 C25.512,38.88 25.728,38.664 25.728,38.4 L25.728,35.172 L29.652,35.172 C29.916,35.172 30.132,34.956 30.132,34.692 L30.132,33.414 C30.132,33.15 29.916,32.934 29.652,32.934 L25.728,32.934 L25.728,30.912 L29.652,30.912 C29.916,30.912 30.132,30.696 30.132,30.432 L30.132,29.154 C30.132,28.89 29.916,28.674 29.652,28.674 L26.706,28.674 L32.064,18.828 C32.1,18.756 32.1241254,18.678 32.1241254,18.6 C32.13,18.336 31.92,18.12 31.65,18.12 L31.65,18.12 Z" fill="#FFF"></path>\n  <path d="M46.08,4.32 L36,4.32 L36,0.48 C36,0.216 35.784,0 35.52,0 L32.16,0 C31.896,0 31.68,0.216 31.68,0.48 L31.68,4.32 L16.32,4.32 L16.32,0.48 C16.32,0.216 16.104,0 15.84,0 L12.48,0 C12.216,0 12,0.216 12,0.48 L12,4.32 L1.92,4.32 C0.858,4.32 0,5.178 0,6.24 L0,46.08 C0,47.142 0.858,48 1.92,48 L46.08,48 C47.142,48 48,47.142 48,46.08 L48,6.24 C48,5.178 47.142,4.32 46.08,4.32 Z M43.68,43.68 L4.32,43.68 L4.32,8.64 L12,8.64 L12,11.52 C12,11.784 12.216,12 12.48,12 L15.84,12 C16.104,12 16.32,11.784 16.32,11.52 L16.32,8.64 L31.68,8.64 L31.68,11.52 C31.68,11.784 31.896,12 32.16,12 L35.52,12 C35.784,12 36,11.784 36,11.52 L36,8.64 L43.68,8.64 L43.68,43.68 Z" fill="#000"></path>\n</svg>\n',
        colors: colorDiy.value,
        base64: true,
      }),
    );
  };

  renderImgBase64();

  const diySvgHtml = ref('');

  const renderDiyBase64 = () => {
    // diySvgHtml.value = ImgKeg({
    //   size: 200,
    //   theme: themeNow.value,
    //   colors: colorDiy.value,
    //   svg: diySvg,
    //   strokeWidth: 2,
    //   strokeLinecap: 'round',
    //   strokeLinejoin: 'round',
    //   base64: true,
    // });
  };
  renderDiyBase64();
  setColor();
</script>
