<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Test' }">活动管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/About' }">关于</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <el-divider></el-divider>
  <div>About</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'About',
  setup() {

    return {
    }
  }
});
</script>

<style scoped>
</style>