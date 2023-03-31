<template>
  <nav>
    <router-link to="/">首页</router-link> |
    <router-link to="/allData">全部数据</router-link> |
    <router-link to="/MyData">我的数据</router-link> |
    <router-link to="/test">测试</router-link>
  </nav>
  <router-view />
</template>
<script setup lang="ts">
import { message } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSysStore } from '@/store/modules/sysStore/systemStore';
import loginApi from './api/module/login';
import { IProject } from './store/types';
const route = useRoute();
const router = useRouter();
const sysStore = useSysStore();
const { t } = useI18n();

watch(
  () => route.path,
  () => {
    // window.$wujie?.bus.$emit(
    //   'wujie-child-route-change',
    //   'governance/datamaps',
    //   route.path,
    // );
  },
);
onMounted(() => {
  //挂载全局方法
  window['$t'] = t;

  //antd全局配置
  message.config({
    top: '100px',
    duration: 1.5,
    maxCount: 3,
    getContainer: () => {
      return document.getElementById('preset-app') as HTMLElement;
    },
  });

  // wujie子应用处理
  window.$wujie?.bus.$on('wujie-parent-route-change', (path: unknown) => {
    return router.push((path as string).replace('/datamaps', ''));
  });

});
console.log('是否在子应用环境',window.$wujie,window.__POWERED_BY_WUJIE__)

loginApi.postVerification().then((res) => {});
</script>
<style lang="scss">
nav {
  position: fixed;
  z-index: 9999;
  top: 60px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
