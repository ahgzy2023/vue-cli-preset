import i18n from '@/i18n/index';
import plugin from '@/icons';
import pinia from '@/store/index';
import '@/style/index.scss';
import * as icons from '@ant-design/icons-vue';
import 'animate.css/animate.min.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'nprogress/nprogress.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

if (window.__POWERED_BY_WUJIE__) {
  let app: any;
  window.__WUJIE_MOUNT = () => {
    app = createApp(App);
    for (const [key, component] of Object.entries(icons)) {
      app.component(key, component);
    }

    app.use(plugin);
    app.use(Antd);
    app.use(router);
    app.use(i18n);
    app.use(pinia);
    app.mount('#preset-app');
  };
  window.__WUJIE_UNMOUNT = () => {
    app.unmount();
  };
} else {
  const app = createApp(App);
  for (const [key, component] of Object.entries(icons)) {
    app.component(key, component);
  }

  app.use(plugin);
  app.use(Antd);
  app.use(router);
  app.use(i18n);
  app.use(pinia);
  app.mount('#preset-app');
}
