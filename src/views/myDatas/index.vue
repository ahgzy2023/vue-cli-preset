<template>
  <div class="datamap-my-data-view">
   zheshimydata
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  onBeforeUnmount,
  nextTick,
  ref,
  toRefs,
  reactive,
  onBeforeMount,
  getCurrentInstance,
  watch,
  onMounted,
  provide,
  onActivated,
} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { funcDomainEnum } from '@/enums/sysEnums';
const router = useRouter();
const route = useRoute();
const { proxy } = <any>getCurrentInstance();
</script>

<style lang="scss" scoped>
.datamap-my-data-view {
  height: 100%;
  background-color: #fff;
  font-weight: 400;
  .datamap-my-data-tabs {
    padding: 0px 30px;
    height: inherit;
    overflow: hidden;
  }
}
</style>
