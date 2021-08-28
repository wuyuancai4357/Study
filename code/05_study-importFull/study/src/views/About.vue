<template>
  <div id="id"></div>
  <el-button @click="increment()">按钮</el-button>
  <div>{{ count }}</div>
</template>

<script lang="ts">
import store from "../store";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: 'about',
  setup() {

    const count = ref(0)
    const increment = () => {
      store.commit('increment', { amount: 1 })
      count.value = store.state.count
      console.log(count.value);
    }
    onMounted(() => {
      count.value = store.state.count
    })
    return {
      count,
      increment
    }
  }
});
</script>

<style scoped>
</style>