<template>
    <a-row type="flex" align="center" justify="center">
      <a-col>
        <a-result icon="warning" title="页面未找到" sub-title="请检查路径后重试或返回首页">
          <template #extra>
            <a-button type="primary" @click="goBack">
              Back
            </a-button>
          </template>
        </a-result>
      </a-col>
    </a-row>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goBack = () => {
    router.push({
      name: 'Home',
    })
  }
  </script>
  