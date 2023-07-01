<!--
 * @Author: fzf404
 * @Date: 2022-08-15 23:02:16
 * @LastEditors: fzf404 me@fzf404.art
 * @LastEditTime: 2023-04-07 16:52:42
 * @Description: 技术概览
-->

`Monit` 是一个开源的桌面小组件，使用 `MIT` 协议开源，你可以自由使用项目中的代码。

基于 `Electron` + `Vue` 开发，渲染进程使用 `Vue`，主进程使用 `TypeScript` 调用 `Electron API`。

- 如果你了解 `Vue`，并不了解 `Electron`，使用本项目即可快速开发出自己的桌面小组件

- 如果你初学 `Vue`，对其他技术一无所知，可以通过本项目继续了解 Vue 及 `package.json` 里包含的所有库的使用方式

- 如果你对 `Vue` 和 `NodeJS` 一无所知，请先去了解相关技术后再来查看本项目，在失望的离开之前别忘了留下一个 `Star`

## ✨ 使用技术

### 🔥 核心技术

- `Electron 21`
  - 跨平台的桌面应用程序构建工具
  - [官方文档](https://www.electronjs.org/zh/docs/latest)
- `Vue 3`
  - `JavaScript` 前端框架
  - [官方文档](https://staging-cn.vuejs.org/)
- `Tailwindcss 3`
  - 功能类 `CSS` 语法糖
  - [官方文档](https://www.tailwindcss.cn/docs)
- `TypeScript`
  - `JavaScript` 类型系统
  - [官方文档](https://www.tslang.cn/docs/home.html)

### 🔧 开源工具

- `Electron Builder`
  - 主进程打包工具
- `Webpack`
  - 渲染进程打包工具
- `Axios`
  - 网络请求工具
- `Vue-Router`
  - 插件核心实现方式
- `Pinia`
  - 全局状态管理工具
- `Husky`
  - Git Commit Hooks
- `Pug`
  - 干净的 `HTML` 模板语法
- `Scss`
  - `CSS` 预处理器
- `Prettier`
  - 代码风格及格式化工具
- `MediaPipe`
  - 使用 `WASM` 的人体跟踪工具包

## 🍻 代码位置

1. Setting 组件：`app/components/setting.vue`
2. Layout 组件：`app/layouts/layout.vue`
3. Theme 样式：`app/themes/base.scss`
4. Plugin 配置：`config/plugin.ts`
5. Event 监听/发送：`event/{handle.ts, send.ts}`
   - 应用操作、打开网址、发送通知
6. Server 封装：`server/{app.ts, plugin.ts, system.ts}`
   - 应用封装、插件封装、接口调用
7. 配置文件位置
   - Mac：`/Users/[user]/Library/Application Support/monit/config.json`
   - Windows：`C:\Users\[user]\AppData\Roaming\monit\config.json`
   - Linux：`/home/[user]/.config/monit/config.json`

## 🍀 项目结构

> 项目结构基于个人喜好，可能随时发生 **重大调整** 。

```bash
Monit
├── app # 渲染进程
│   ├── assets # 静态资源
│   ├── components # 可复用组件
│   │   ├── iamge.vue # 图像组件
│   │   ├── loading.vue # 加载组件
│   │   └── setting.vue # 设置组件
│   ├── layouts # 布局
│   │   ├── layout.vue # 布局切换组件
│   │   ├── maco.vue # mac 风格布局
│   │   └── wine.vue # win 风格布局
│   ├── plugins # 插件
│   │   └── ... # 全部插件
│   └── themes # 主题
│   │   ├── base.scss # 全局基础样式
│   │   ├── dark.scss # 黑夜风格主题
│   │   ├── punk.scss # 赛博风格主题
│   │   └── light.scss # 白日风格主题
│   ├── app.vue # app 入口
│   ├── pinia.ts # pinia 配置
│   ├── main.ts # main 入口
│   └── router.ts # router 配置
├── config # 应用配置
│   ├── layout.ts # 布局配置
│   ├── plugin.ts # 插件配置
│   ├── theme.ts # 主题配置
│   └── utils.ts # 工具包
├── core # 主进程
│   ├── devtool.ts # 开发者工具
│   ├── main.ts # 主进程
│   ├── shortcut.ts # 快捷键初始化
│   ├── tray.ts # 托盘进程
│   ├── update.ts # 更新检测
│   └── window.ts # 窗口管理
├── docs # 官网
│   └── ... # 插件文档
├── event # 自定义事件
│   ├── handle.ts # 事件处理
│   ├── send.ts # 事件发送
├── lib # 库文件
│   ├── camera.ts # 相机控制
│   ├── hoslistic.ts # 角色跟踪封装
│   ├── request.ts # 请求封装
│   ├── statistic.ts # 统计封装
│   └── storage.ts # 本地存储封装
├── public # 静态文件
│   └── img # 托盘图标
├── server # 服务封装
│   ├── app.ts # 应用封装
│   ├── plugin.ts # 插件封装
│   └── system.ts # 系统封装
├── .prettier # 代码格式化配置
├── tailwind.config.js # tailwindcss 配置
├── tsconfig.json # typescript 配置
└── vue.config.js # vue-cli 配置 & electron 打包配置
```
