import {createI18n} from 'vue-i18n/dist/vue-i18n.cjs.js'
import AppString from './strings';
import {Locale} from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
import zhCN from 'vant/lib/locale/lang/zh-CN';

// 解析语言数组
function getZhEnMessage() {
  let message = {zh: {}, en: {}};
  Object.keys(AppString).forEach(function (key) {
    message.zh[key] = AppString[key][0];
    message.en[key] = AppString[key][1];
  });
  return message;
}

const i18n = createI18n({
  messages: getZhEnMessage(),
  locale: 'zh'
});

i18n.reload = () => {
  let local = 'zh';
  if (window.localStorage.getItem('language') === 'en') {
    local = 'en';
    Locale.use('en-US', enUS);
  } else {
    Locale.use('zh-CN', zhCN);
  }
  i18n.locale = local;
};

i18n.reload();

export default i18n;
