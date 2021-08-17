<template>
  <img src="./assets/logo.png" />
  <div>
    <p>
      If Element Plus is successfully added to this project, you'll see an
      <code
        v-text="'<el-button>'"
      ></code> below
    </p>
    <el-button type="primary">el-button</el-button>
    <el-button type="danger" @click="alert">警告按钮</el-button>
    <el-alert title="成功提示的文案" type="success"></el-alert>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const alert = () => {

      // setInterval(() => {
      ElMessage.warning({
        message: '错误信息',
        type: 'warning',
        center: true
      })
      // }, 2000)

    }

    return {
      alert
    }
  }
}
</script>

<style>
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
