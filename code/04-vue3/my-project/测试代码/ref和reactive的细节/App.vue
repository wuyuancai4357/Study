<template>
  <div>
    <h5>reactive和ref的细节</h5>

    <h4>data1:{{ data1 }}</h4>
    <h4>data2:{{ data2 }}</h4>
    <h4>data3:{{ data3 }}</h4>

    <button @click="updateData">更新数据</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "App",

  //ref中的数据是对象或者数组，那么在进行操作的时候是将ref转换为reactive的proxy对象来进行操作的
  //ref内部是通过value属性的getter和setter来将属性值进行修改和显示的（即劫持数据）
  //reactive内部是通过使用proxy来实现对对象数据的劫持，通过reflect操作对象中的数据
  //ref在js中都需要调用value属性才能操作数据（不管是基本数据类型还是对象数据和数组数据）
  //  而在HTML中不需要调用value属性（内部解析时会自动添加value的调用）

  //
  setup() {
    const data1 = ref("123")
    const data2 = reactive({
      name:"小明",
      age:22,
      wife:{
        name:"小红",
        age:20
      }
    })
    const data3 = ref({
      name:"小軍",
      age:22,
      wife:{
        name:"小兰",
        age:20
      }
    })
    const updateData = () => {
      data1.value+="+++"
      data2.name+="===="
      data3.value.wife.name+="------"
    }
    return {
      data1, data2, data3, updateData
    }
  }
})
</script>