<template>
  <div>very good</div>
  <h2>测试ref</h2>
  <h3>{{ num }}</h3>
  <button @click="update">更新数据</button>


</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  //test ref对象
  setup() {
    
    let num = ref(0);//ref定义该数据是响应式的数据，返回的是ref对象，该对象中有value属性，操作数据通过xx.value来进行操作,操作过程是需要调用value属性，但在HTML中显示是不需要调用value属性的
    function update() {
      num.value++;
      console.log(num.value);
    }
    return {
      num,
      update,
    };
  },
});
</script>