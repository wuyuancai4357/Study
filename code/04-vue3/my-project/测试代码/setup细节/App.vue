<template>
  <div>
    <h4>父级组件</h4>
    <h5>msg:{{ msg }}</h5>

    <button @click="msg += '!!'">更新数据</button>

    <hr />
    <child :msg="msg" msgs="good" @xxx="update" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import child from './components/Child.vue'
export default defineComponent({
  name: "App",
  components: {
    child
  },

  setup() {
    const msg = ref('你好')
    function update(text: string) {
      msg.value += text
    }

    return {
      msg,
      update
    }
  }
})
</script>