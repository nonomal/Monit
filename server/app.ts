/*
 * @Author: fzf404
 * @Date: 2022-07-15 12:45:00
 * @LastEditors: fzf404 me@fzf404.art
 * @LastEditTime: 2023-04-15 22:58:48
 * @Description: app 调用
 */

import { app } from 'electron'

import { clear, get, set, store } from '~/lib/storage'

// 读取配置
export const getValue = (name: string, key: string, defalut: string): Object => {
  return get(name, key, JSON.parse(defalut))
}

// 保存配置
export const setValue = (name: string, key: string, value: string) => {
  set(name, key, JSON.parse(value))
}

// 退出应用
export const quitApp = () => {
  app.quit()
}

// 重启应用
export const restartApp = () => {
  app.relaunch()
  quitApp()
}

// 重置应用
export const resetApp = () => {
  clear()
  restartApp()
}

// 应用自启状态
export const bootState = (): boolean => {
  return app.getLoginItemSettings().openAtLogin
}

// 自启应用
export const bootApp = (state: boolean) => {
  // 设置自启
  app.setLoginItemSettings({
    openAtLogin: state
  })
}

// 编辑配置
export const openConfig = () => {
  store.openInEditor()
}

// 获取版本
export const getVersion = (): string => {
  return app.getVersion()
}
