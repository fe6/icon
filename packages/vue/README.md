<!-- @format -->

# Water Icon 图标

> Water 图标体系， vue 项目中使用

## 介绍

### 新特性

- 现仅仅支持 **_vue3_**
- 支持 4 种主题:
  - 线性
  - 填充
  - 双色
  - 四色

## 快速上手

### 安装

```
npm install @fe6/icon-vue --save
```

### 引用图标

在组件的上方引用`@fe6/icon-vue`，并在组件的模板函数中使用:

```vue
<template>
  <icon-video theme="filled" />
</template>
<script>
  import { IconVideo } from '@fe6/icon-vue';

  export default {
    components: {
      IconVideo,
    },
  };
</script>
```

如果你不想引用，那么你可以全局安装图标

```typescript
import { waterIconInstall } from '@fe6/icon-vue';
import { createApp } from 'vue';

const app = createApp({});

// Install
waterIconInstall(app); // 默认前缀是 'icon', 例如: 对于`People`这个icon, 组件名字是`icon-video`.
waterIconInstall(app, 'i'); // 使用自定义前缀'i', 例如: 对于`People`这个icon，组件名字是`i-video`.
app.mount('#app');
```

### Style Sheet

引用预设样式

```typescript
import '@fe6/icon-vue/styles/index.css';
```

### 全局

你可以使用 `@fe6/icon-vue` 中的 `IconProvider`来设置全局配置。

```html
<template>
  <div>
    <icon-video theme="filled" />
  </div>
</template>

<script>
  import { DEFAULT_ICON_CONFIGS, IconProvider } from '@fe6/icon-vue';
  import { IconVideo } from '@fe6/icon-vue';

  export default {
    components: {
      IconVideo,
    },
    setup() {
      IconProvider({ ...DEFAULT_ICON_CONFIGS, prefix: 'i' });
    },
  };
</script>
```

### 按需加载

可以使用[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)来按需加载图标

配置如下:

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@fe6/icon-vue",
        "libraryDirectory": "es/icons",
        "camel2DashComponentName": false
      }
    ]
  ]
}
```

### 使用 Icon 组件

我们更推荐使用按需加载的方式来加载图标，因为这样可以大幅度缩减编译后代码体积，
但是在有些类似远程加载的菜单的场景下，直接引用全部图标可以缩减开发成本。

使用方式：

```vue
<template>
  <water-icon type="IconVideo" theme="filled" />
</template>
<script>
  import { WaterIcon } from '@fe6/icon-vue';

  export default {
    components: {
      WaterIcon,
    },
  };
</script>
```

### 将 WaterIcon 嵌入到你的项目中

如果你的项目中需要使用到图标名称，作者，分类，标签以及创建时间等额外的信息，你可以使用位于每个 NPM 根目录的`icons.json`文件。

## 属性

| 属性名称       | 介绍                                        | 类型                                                             | 默认值         | 注释 |
| -------------- | ------------------------------------------- | ---------------------------------------------------------------- | -------------- | ---- |
| theme          | 图标主题                                    | 'outline' &#124; 'filled' &#124; 'two-tone' &#124; 'multi-color' | 'outline'      |
| size           | 图标的大小，宽高相同                        | number &#124; string                                             | '1em'          |
| spin           | 给图标加旋转效果                            | boolean                                                          | false          |
| fill           | 图标的颜色，不超过 4 个颜色，默认为当前颜色 | string &#124; string[]                                           | 'currentColor' |
| strokeLinecap  | svg 元素的 stroke-linecap 属性              | 'butt' &#124; 'round' &#124; 'square'                            | 'round'        |
| strokeLinejoin | svg 元素的 stroke-linejoin 属性             | 'miter' &#124; 'round' &#124; 'bevel'                            | 'round'        |
| strokeWidth    | svg 元素的 stroke-width 属性                | number                                                           | 4              |
