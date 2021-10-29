<!-- @format -->

# 资源包

> 自动生成基础内置 icon 组件的资源

## 添加步骤

- 拷贝原始 svg 到 `/source` ， 编辑好分组
- 每个 icon 自己有个文件夹，并在 icon 文件夹中编辑好信息命名为： **_info.json_**
- 运行 `pnpm gen:json` 生成 **_icon.json_**
- 然后[发版](https://pnpm.io/zh/workspaces#%E5%8F%91%E5%B8%83%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4%E5%8C%85)

## 规则

- svg 中只能是 path
- 颜色规范
  - 外部描边颜色(#000|black)
  - 外部填充颜色(#2f88ff|#2F88FF)
  - 内部描边颜色(#fff|#FFF|white)
  - 内部填充颜色(#43ccf8|#43CCF8)
- 带 ID 的 mask 需要修改成 maskX ， 如 mask0
- 属性不能有重复，不然可能造成 ICON 渲染失败
