<template>
  <div>
    <h5>Vue2.x和Vue3的生命周期比较</h5>

    <h4>父级组件</h4>
    <button @click="isShow=!isShow">切换显示</button>
    <hr />

    <Child v-if="isShow"></Child>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from './components/Child.vue'

export default defineComponent({
  name: "App",
  components: {
    Child
  },

  setup() {
    const isShow = ref(false)
    
    return {
      isShow
    }
  }
})
</script>