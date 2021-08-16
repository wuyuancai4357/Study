<template>
  <div>
    <h5>ref获取页面标签元素</h5>

    <input type="text" name="" id="" ref="inputRef">
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "App",
  //当页面加载完毕之后，文本框可以自动接获取焦点

  

  setup() {
    const inputRef=ref<HTMLElement>()

      onMounted(() => {
        
        inputRef.value?.focus()
      })

    
    return {
      inputRef
    }
  }
})
</script>