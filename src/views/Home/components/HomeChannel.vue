<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in navList" :title="item.text" :key="item.id"></van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import axios from 'axios';
import { reqNavList } from '@/api';
interface INavItem {
  text: string;
  id: string;
}
let active = ref(0);
let navList = ref<INavItem[]>([]);

axios({
  url: '/mock/navList',
  method: 'get',
}).then(res => {
  navList.value = res.data.result;
});
</script>

<style lang="less" scoped>
.van-tabs {
  position: fixed;
  top: 12vw;
  left: 0;
  z-index: 999;
  box-sizing: border-box;
  width: 100vw;
}
</style>
