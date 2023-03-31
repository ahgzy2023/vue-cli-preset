<template>
    <div>
        
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
  onActivated
} from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const { proxy } = <any>getCurrentInstance();


</script>

<style lang="scss" scoped>

</style>