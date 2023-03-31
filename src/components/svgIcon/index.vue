<template>
  <!-- <div
      v-if="isExternal"
      :style="styleExternalIcon"
      class="svg-external-icon svg-icon"
      v-bind="$attrs"
    /> -->
  <svg
    :class="svgClass"
    aria-hidden="true"
    v-bind="$attrs"
    :style="{
      width: size + 'px',
      height: size + 'px',
      border: border? '1px solid #D9D9D9' : 'none',
      color: color
    }"
  >
    <use :href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface IProps {
  name?: string;
  className?: string;
  customClass?: string;
  size?: number;
  border?: boolean;
  color?: string
}

const props = withDefaults(defineProps<IProps>(), {
  name: 'non-existent',
  className: '',
  customClass: '',
  size: 16,
  color: '#000',
  border: false
});

const iconName = computed(() => {
  return `#icon-${props.name}`;
});
const svgClass = computed(() => {
  if (props.className) {
    return 'svg-icon ' + props.className;
  }
  if (props.customClass) {
    return props.customClass;
  }
  return 'svg-icon';
});
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.name}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.name}) no-repeat 50% 50%`,
  };
});
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
