<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col class="logo" :span="24">
            <img src="@/assets/logo.png" alt />
          </el-col>
        </el-row>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              :router="true"
              :uniqueOpened="true"
              default-active="/Home"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item style="padding: 0px;" index="/Home">
                <i class="el-icon-location"></i>
                <template #title>首页</template>
              </el-menu-item>
              <el-menu-item style="padding: 0px;" index="/Test">
                <i class="el-icon-menu"></i>
                <template #title>详情</template>
              </el-menu-item>
              <el-menu-item style="padding: 0px;" index="/About">
                <i class="el-icon-document"></i>
                <template #title>展示</template>
              </el-menu-item>
              <el-menu-item style="padding: 0px;" index="/setting">
                <i class="el-icon-setting"></i>
                <template #title>设置</template>
              </el-menu-item>
              <el-menu-item style="padding: 0px;" index="/manager">
                <i class="el-icon-location"></i>
                <template #title>管理</template>
              </el-menu-item>
              <el-menu-item style="padding: 0px;" index="/show">
                <i class="el-icon-location"></i>
                <template #title>关于</template>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {

    return {

    };
  },
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body .el-table th.gutter {
  display: table-cell !important;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  height: 930px;
  background-color: #545c64;
  color: var(--el-text-color-primary);
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.logo > img {
  width: 50px;
  height: 50px;
  margin: 3px auto;
}

.el-menu > .el-menu-item {
  font-size: 20px;
  width: 200px;
}
</style>
