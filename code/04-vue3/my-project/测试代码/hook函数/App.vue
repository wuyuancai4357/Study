<template>
  <div>
    <h5>自定义hook函数</h5>

    <h4>x:{{ x }}</h4>
    <h4>y:{{ y }}</h4>

    <h4 v-if="loading">加载中....</h4>
    <h4 v-else-if="errorMsg">错误信息:{{ errorMsg }}</h4>
    <ul v-else-if="!Array.isArray(data)">
      <li>id:{{ data?.id }}</li>
      <li>名字：{{ data?.name }}</li>
      <li>年龄：{{ data?.age }}</li>
      <li>地址：{{ data?.address }}</li>
    </ul>
    <ul v-else v-for="item in data" :key="item.id">
      <li>id:{{ item.id }}</li>
      <li>名字：{{ item.name }}</li>
      <li>年龄：{{ item.age }}</li>
      <li>地址：{{ item.address }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";

// 在组件中引入并使用自定义hook
// 自定义hook的作用类似于vue2中的mixin技术
// 自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂
import useMousePosition from './hooks/useMousePosition'

import useRequest from './hooks/useRequest'

interface IUserInformation {
  id: number
  name: string
  age: number
  address: string
}

export default defineComponent({
  name: "App",
  setup() {

    // 解构x,y
    const { x, y } = useMousePosition()
    const { loading, data, errorMsg } = useRequest<IUserInformation>("/data/manUserInformation.json")
    // const { loading, data, errorMsg } = useRequest<IUserInformation>("/data/womanUserInformation.json")
    return {
      x, y,
      loading, data, errorMsg
    }
  }
})
</script>