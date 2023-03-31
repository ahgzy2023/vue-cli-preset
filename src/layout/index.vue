<template>
  <a-config-provider :locale="locale">
    <a-layout class="datamap-container">
      <router-view
        v-if="isRouteAlive"
        :key="route.path"
        v-slot="{ Component }"
      >
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </a-layout>
  </a-config-provider>
</template>

<script lang="ts" setup>
import { defineComponent, computed, ref } from 'vue';
import { LangEnum } from '@/enums/sysEnums';
import zhCn from 'ant-design-vue/lib/locale-provider/zh_CN';
import enUS from 'ant-design-vue/lib/locale-provider/en_US';
import { useSysStore } from '@/store/modules/sysStore/systemStore';
import { useRoute, useRouter } from 'vue-router';

const sysStore = useSysStore();
const isRouteAlive = computed(() => sysStore.getRouteAlive);
const globalLoading = computed(() => sysStore.getLoading);
const route = useRoute();
const router = useRouter();
const locale = ref(zhCn);

</script>

<style lang="scss" scoped>
.datamap-container {
  background: #f5f5f5;
  position: absolute;
  width: 100%;
  height: calc(100% - 0px);
  overflow: hidden;
}
</style>
