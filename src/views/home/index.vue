<template>
  <div
    ref="dataMapHomeRef"
    class="datamap-home"
  >
  zheshi shouye
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
import goldMedalbg from '@/assets/images/gold_medal.png';
import bronzeMedalbg from '@/assets/images/bronze_medal.png';
import silverMedalbg from '@/assets/images/silver_medal.png';
import { useColumns } from '@/hooks';
import { message } from 'ant-design-vue';
import { funcDomainEnum, pageEnum } from '@/enums/sysEnums';
import { useSysStore } from '@/store/modules/sysStore/systemStore';
import { cloneDeep } from 'lodash-es';

const router = useRouter();
const route = useRoute();
const { proxy } = <any>getCurrentInstance();

</script>

<style lang="scss" scoped>
.datamap-home {
  background-color: #fff;
  font-family: 'PingFang SC';
  font-weight: 400;
  height: 100%;
:deep() {
  .ant-modal-close {
    left: 40px;
    top: 20px;
    width: fit-content;
  }
  .ant-input-lg {
    font-size: 14px;
  }
  .ant-select-selector {
    background: rgba(230, 247, 255, 0.5) !important;
    border: none !important;
  }
  ::-webkit-scrollbar {
    width: 6px !important;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  .ant-input-search-button {
    border-radius: 0px 4px 4px 0px !important;
    height: 40px;
  }
  .ant-input-group-addon {
    padding: 0px;
  }
  .ant-input-affix-wrapper {
    height: 40px;
  }
}
}
</style>
