<!-- @format -->

# Water Icon 图标

> Water 图标体系，项目中有需要 定制图标 时候使用

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
npm install @fe6/icon-cube-vue --save
```

### 引用图标

在组件的上方引用`@fe6/icon-cube-vue`，并在组件的模板函数中使用:

```vue
<template>
  <CubeVideo />
</template>
<script>
  import { CubeVideo } from '@fe6/icon-cube-vue';

  export default {
    components: {
      CubeVideo,
    },
  };
</script>
```

### Style Sheet

引用预设样式

```typescript
import '@fe6/icon-cube-vue/styles/index.css';
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
        "libraryName": "@fe6/icon-cube-vue",
        "libraryDirectory": "es/icons",
        "camel2DashComponentName": false
      }
    ]
  ]
}
```

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
