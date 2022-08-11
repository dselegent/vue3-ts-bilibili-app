<template>
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 频道组件 -->
  <HomeChannel />
  <!-- 轮播组件 -->
  <HomeSwipe />
  <!-- 视频组件 -->
  <HomeVideoList />
</template>

<script setup lang="ts">
// Vue3 的 script setup 只需要导入组件，无需注册，直接可以在模板中使用
import AppHeader from '@c/AppHeader.vue';
import HomeChannel from '@v/Home/components/HomeChannel.vue';
import HomeSwipe from '@v/Home/components/HomeSwipe.vue';
import HomeVideoList from './components/HomeVideoList.vue';
</script>
