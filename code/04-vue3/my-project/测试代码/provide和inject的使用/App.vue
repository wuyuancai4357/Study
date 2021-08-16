<template>
  <div>
    <h5>provid与inject的使用</h5>

    <h4>用于跨层级组件（即跨过父级组件，子级组件直接与父父级组件进行数据交互）</h4>
    <hr />

    <p>当前颜色：{{ color }}</p>

    <button @click="color = 'red'">red</button>
    <button @click="color = 'blue'">blue</button>
    <button @click="color = 'pink'">pink</button>
    <hr />

    <Son></Son>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import Son from "./components/Son.vue";

export default defineComponent({
  name: "App",
  components: { Son },
  setup() {
    const color = ref("red");

    //父父级组件提供给孙级组件的数据
    provide('color',color)
    return {
      color
    };
  },

})
</script>