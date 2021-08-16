<template>
  <div>
    <h5>readonly和shallowReadonly的使用</h5>
    <h4 style="color:red">
      readonly:<br />
      深度只读数据<br />
      获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。<br />
      只读代理是深层的：访问的任何嵌套 property 也是只读的。<br />
      shallowReadonly<br />
      浅只读数据<br />
      创建一个代理，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换<br />
      应用场景:<br />
      在某些特定情况下, 我们可能不希望对数据进行更新的操作, <br />
      那就可以包装生成一个只读代理对象来读取数据, 而不能修改或删除<br />
    </h4>

    <h4>state:{{ state3 }}</h4>

    <button @click="updateData">更新数据</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";

export default defineComponent({
  name: "App",
  setup() {

    const state = reactive({
      name: 'tony',
      age: 22,
      car: {
        name: 'bmw',
        color: 'red'
      }
    })

    //readonly是深度只读数据
    const state2 = readonly(state)

    //shallowReadonly是浅层只读，深层数据仍然可以修改
    const state3 = shallowReadonly(state)

    const updateData = () => {
      state3.car.name = 'sam'
    }

    return {
      state3,
      updateData,
    }
  }
})
</script>