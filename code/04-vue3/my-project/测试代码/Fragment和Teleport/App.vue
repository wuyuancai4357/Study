<template>
  <!--在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中
  好处: 减少标签层级, 减小内存占用-->
  <h5>Fragment和Teleport</h5>

  <!--Teleport-->

  <h5>父级组件</h5>

  <ModalButton></ModalButton>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ModalButton from "./modalButton.vue";
export default defineComponent({
  name: "App",
  components: {
    ModalButton,
  },
  setup() {


    return {
    }
  }
})
</script>