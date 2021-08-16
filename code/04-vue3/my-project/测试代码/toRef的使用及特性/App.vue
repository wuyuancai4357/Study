<template>
  <div>
    <h5>toRef的使用及特性</h5>
    <h6>
      <br />为源响应式对象上的某个属性创建一个 ref 对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
      <br />区别 ref: 拷贝了一份新的数据值单独操作, 更新时相互不影响
      <br />应用: 当要将 某个 prop 的 ref 传递给复合函数时，toRef 很有用
    </h6>

    <hr />
    <h4>state:{{ state }}</h4>
    <h4>age:{{ age }}</h4>
    <h4>money:{{ money }}</h4>

    <hr />

    <button @click="update">更新数据</button>

    <Child :age="age" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRef } from "vue";
import Child from './components/Child.vue'
export default defineComponent({
  name: "App",
  components: {
    Child
  },

  setup() {
    const state = reactive({
      age: 6,
      money: 100
    })

    //toRef转换的响应式数据对象，修改数据，两者同步更新数据
    // （即修改的是同一个数据值，指向同一个存储空间）
    const age = toRef(state, 'age')


    //ref: 拷贝了一份新的数据值单独操作, 更新时相互不影响
    const money = ref(state.money)
    const update = () => {
      console.log('你好');
      state.age++
      age.value++
      money.value++
    }

    return {
      state,
      age,
      money,
      update,
    }
  }
})
</script>