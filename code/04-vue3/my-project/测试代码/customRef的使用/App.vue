<template>
  <div>
    <h5>customRef的使用</h5>

    <h4>创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制</h4>
    <input type="text" v-model="keyword" />

    <p>{{ keyword }}</p>
  </div>
</template>
<script lang="ts">
import { customRef, defineComponent, ref } from "vue";

function useDebounceRef<T>(value: T, delay = 100) {
  let timeOutId: number

  return customRef((track, triiger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue: T) {

        clearTimeout(timeOutId)
        timeOutId = setTimeout(() => {
          value = newValue
          triiger()
        }, delay)
      }
    }
  })
}

export default defineComponent({
  name: "App",
  setup() {

    const keyword = useDebounceRef('123', 1000)

    return {
      keyword,
    }
  }
})
</script>