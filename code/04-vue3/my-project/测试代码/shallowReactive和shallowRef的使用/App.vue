<template>
  <div>
    <h5>shallowReactive和shallowRef的使用</h5>
    <h6>使用场景：一般情况下使用 ref 和 reactive 即可</h6>
    <h6>如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive</h6>
    <h6>如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef</h6>

    <h3 style="color: red;">注意:若深度劫持发生数据改变，那么浅层劫持修改深层数据也会生效</h3>

    <h4>m1:{{ m1 }}</h4>
    <h4>m2:{{ m2 }}</h4>
    <h4>m3:{{ m3 }}</h4>
    <h4>m4:{{ m4 }}</h4>
    <hr />
    <button @click="updateData">更新数据</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from "vue";

export default defineComponent({
  name: "App",

  setup() {

    //深度劫持数据----深度响应式数据
    const m1 = reactive({
      name: '小明',
      age: 22,
      car: {
        name: "大众",
        color: "白色"
      }
    })

    //浅层次劫持数数据---只第一层数据为响应式数据
    const m2 = shallowReactive({
      name: '小明',
      age: 22,
      car: {
        name: "大众",
        color: "白色"
      }
    })

    //深度劫持，如果是对象数据，通过reactive来进行响应式数据
    const m3 = ref({
      name: '小明',
      age: 22,
      car: {
        name: "大众",
        color: "白色"
      }
    })

    //浅层数据响应
    const m4 = shallowRef({
      name: '小明',
      age: 22,
      car: {
        name: "大众",
        color: "白色"
      }
    })

    const updateData = () => {
      // m1.car.color = "tony"
      // m2.car.color = '黑色'
      // m3.value.car.color = '红色'
      // m4.value.car.color = "蓝色"
    }

    return {
      m1,
      m2,
      m3,
      m4,
      updateData
    };
  },
});
</script>
