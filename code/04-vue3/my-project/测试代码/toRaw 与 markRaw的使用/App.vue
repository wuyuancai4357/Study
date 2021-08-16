<template>
  <div>
    <h5>toRaw 与 markRaw的使用</h5>
    <h4>
      toRaw
      <br />返回由 reactive 或 readonly 方法转换成响应式代理的普通对象。
      <br />如果想通过toRaw拿到ref类型的原始数据（创建时传入的那个数据）
      <br />那么就必须明确告诉toRaw方法，要获取的还是 .value 的值
      <br />因为经过vue处理之后， .value 中保存的才是当初创建时传入的那个原始数据
      <br />这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新。
      <br />markRaw
      <br />标记一个对象，使其永远不会转换为代理。返回对象本身
      <br />应用场景:
      <br />有些值不应被设置为响应式的，例如复杂的第三方类实例或 Vue 组件对象。
      <br />当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能。
    </h4>
    <h4>state:{{ state }}</h4>

    <hr />

    <button @click="testToraw">testToraw</button>
    <hr />
    <button @click="testMarkraw">testMarkraw</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from "vue";

interface userInfo {
  name: string
  age: number
  car?: Record<string, unknown>
  likes?: string[]
}

export default defineComponent({
  name: "App",
  setup() {

    const state = reactive<userInfo>({
      name: 'tony',
      age: 22,
      car: {
        name: 'bmw',
        color: 'red'
      }
    })

    //将代理对象转换为普通对象，即去除响应，数据会改变，界面不渲染
    const testToraw = () => {
      console.log(1);

      const user = toRaw(state)
      user.name = 'sam'
      console.log(state);
    }

    const testMarkraw = () => {
      console.log(2);
      // state.likes = ['game', 'drink']
      // state.likes[0] += '----'

      // markRaw标记的对象数据，不能再转换为代理对象，也就失去了响应式,但是数据仍然改变了，界面不渲染
      state.likes = markRaw(['game', 'drink'])
      setInterval(() => {
        if (state.likes)
          state.likes[0] += '+++'
        console.log(state);

      }, 1000)

    }



    return {
      state,
      testMarkraw,
      testToraw,
    }
  }
})
</script>