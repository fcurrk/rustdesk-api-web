import en from '@/utils/i18n/en.json'
import zhCN from '@/utils/i18n/zh_CN.json'
import ko from '@/utils/i18n/ko.json'
import ru from '@/utils/i18n/ru.json'
import { useAppStore } from '@/store/app'

export function T (key, params, num = 0) {
  const appStore = useAppStore()
  const lang = appStore.setting.lang
  const trans = {
    'en': en,
    'zh-CN': zhCN,
    'ko': ko,
    'ru': ru,
  }
  const tran = trans[lang][key]
  if (!tran) {
    return key
  }
  const msg = num > 1 ? (tran.Other ? tran.Other : tran.One) : tran.One
  //msg 是这样 {name} is name
  //params 是这样 {name: 'zhangsan'}
  //替换
  return msg.replace(/{(\w+)}/g, function (match, key) {
    return params[key] || match
  })
}