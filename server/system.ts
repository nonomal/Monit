/*
 * @Author: fzf404
 * @Date: 2023-03-28 09:15:57
 * @LastEditTime: 2023-03-30 21:20:22
 * @LastEditors: fzf404 me@fzf404.art
 * @Description: utils 调用
 */

import { dialog, Notification, shell, systemPreferences } from 'electron'

// 打开链接
export const openURL = (url: string) => {
  shell.openExternal(url)
}

// 打开文件
export const openFile = (type: 'image' | 'video' | 'audio' | 'all') => {
  const filters = [
    { name: 'image', extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp'] },
    { name: 'video', extensions: ['mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv'] },
    { name: 'audio', extensions: ['mp3', 'wav', 'flac', 'aac', 'ogg'] },
    { name: 'all', extensions: ['*'] }
  ]
  return dialog.showOpenDialogSync({
    properties: ['openFile'],
    filters: [filters[type === 'image' ? 0 : type === 'video' ? 1 : type === 'all' ? 2 : 3]]
  })
}

// 发送通知
export const sendNotice = (name: string, message: string) => {
  new Notification({ title: `Monit - ${name}`, body: message }).show()
}

// 发送弹窗
export const sendAlert = (name: string, message: string) => {
  dialog.showMessageBox({
    type: 'warning',
    title: `Monit - ${name}`,
    message: `Monit - ${name}`,
    detail: message
  })
}

// 发送确认弹窗
export const sendConfirm = (name: string, message: string, callback: Function) => {
  dialog
    .showMessageBox({
      type: 'warning',
      title: `Monit - ${name}`,
      message: `Monit - ${name}`,
      detail: message,
      buttons: ['取消', '确定']
    })
    .then(({ response }) => {
      if (response === 1) {
        callback()
      }
    })
}

// 判断权限
export const judgeMediaAccess = (type: 'microphone' | 'camera') => {
  return systemPreferences.getMediaAccessStatus(type)
}

// 请求权限
export const requestMediaAccess = (type: 'microphone' | 'camera') => {
  return systemPreferences.askForMediaAccess(type)
}
