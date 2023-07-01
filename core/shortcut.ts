/*
 * @Author: fzf404
 * @Date: 2023-03-11 22:15:41
 * @LastEditors: fzf404 me@fzf404.art
 * @LastEditTime: 2023-04-20 21:43:58
 * @Description: shortcut 初始化
 */

import { globalShortcut } from 'electron'

import { createPlugin, focusAllPlugin } from '~/server/plugin'

// 初始化快捷键
export const initShortcut = () => {
  // 开启配置插件
  globalShortcut.register('CommandOrControl+Shift+m', () => {
    createPlugin('config')
  })
  // 激活全部插件
  globalShortcut.register('CommandOrControl+Shift+Alt+m', () => {
    focusAllPlugin()
  })
}
