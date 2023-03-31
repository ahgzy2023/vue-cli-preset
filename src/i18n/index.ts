import { LangEnum } from '@/enums/sysEnums';
import nextEn from '@/i18n/lang/en';
import nextZhcn from '@/i18n/lang/zh';
import enLocale from 'ant-design-vue/es/locale/en_US';
import zhcnLocale from 'ant-design-vue/es/locale/zh_CN';
import { createI18n } from 'vue-i18n';

// 定义语言国际化内容
/**
 * 说明：
 * /src/i18n/lang 下的 ts 为框架的国际化内容
 * /src/i18n/pages 下的 ts 为各界面的国际化内容
 */
const messages = {
  [LangEnum.ZH]: {
    ...zhcnLocale,
    ...nextZhcn,
  },
  [LangEnum.EN]: {
    ...enLocale,
    ...nextEn,
  },
};

// 导出语言国际化
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: LangEnum.ZH,
  fallbackLocale: LangEnum.ZH,
  messages,
});
export default i18n;
