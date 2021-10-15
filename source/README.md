<!-- @format -->

# 资源包

> 自动生成基础内置 icon 组件的资源

## 添加步骤

- 拷贝原始 svg 到 `/source` ， 编辑好分组
- 每个 icon 自己有个文件夹，并在 icon 文件夹中编辑好信息命名为： **_info.json_**
- 运行 `pnpm gen:json` 生成 **_icon.json_**
- 运行 `pnpm gen:code` 生成 `packages/vue` 的 **icon 组件包**
