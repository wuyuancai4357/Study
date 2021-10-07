<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="12">
            <h5>饭团</h5>
            <el-menu
              active-text-color="#ffd04b"
              router="true"
              class="el-menu-vertical-demo"
              default-active="/Home"
              style="min-height: fit-content;"
            >
              <el-menu-item index="/Home">
                <i class="el-icon-location"></i>
                <span>控制台</span>
              </el-menu-item>
              <el-menu-item index="/about">
                <i class="el-icon-menu"></i>
                <span>数据展示</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span>数据修改</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>数据表单</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span>数据列表</span>
              </el-menu-item>
              <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span>数据操作</span>
              </el-menu-item>
              <el-menu-item index="7">
                <i class="el-icon-setting"></i>
                <span>数据保存{{ str }}</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header @click="fun2">Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer @click="fun1">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="js">
import { defineComponent, ref } from "vue";
import router from '../src/router/index'

export default defineComponent({
  name: "App",
  setup() {

    if (router.hasRoute("Home")) {
      router.replace('/Home')
    }

    const str = ref(true)

    let fun1 = async () => {
      await fun2();
      str.value = !str.value
      console.log("async方法");
    }

    const fun2 = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("await方法");
          resolve()
        }, 2000); 
        
      })
    }

    return {
      str,
      fun1,
      fun2,

    }
  }
})
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  height: 120px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: left;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  height: 85vh;
}

body > .el-container {
  margin-bottom: 40px;
}
/* 
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  height: 100%;
}

.el-container:nth-child(7) .el-aside {
  height: 100%;
} */

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>