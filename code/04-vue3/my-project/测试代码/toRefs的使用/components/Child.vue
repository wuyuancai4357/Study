<template>
    <div>
        <h4>name:{{ state.name }}</h4>
        <h4>age:{{ state.age }}</h4>

        <h4>name:{{ name }}</h4>
        <h4>age:{{ age }}</h4>
    </div>
</template>
  <script lang="ts">
import { defineComponent, onBeforeUnmount, reactive, toRefs } from "vue";

export default defineComponent({
    name: "Child",

    setup() {

        const state = reactive({
            name: "小明",
            age: 20
        })

        //将reactive响应式对象转换为普通对象，该对象的每个属性都是一个ref对象
        // const state2=toRefs(state)
        // 解构state2变量
        const { name, age } = toRefs(state)
        // 计数
        let count = 0
        //定时器1秒更新数据

        const setinterval = setInterval(() => {
            state.name += "="
            //state.age += 1
            //state中的属性name和age被toRefs转换为ref对象,需要通过.prop.value的方式来访问数据
            name.value+="++"
            age.value+=2
            

            console.log(count += 1)

        }, 1000)

        //5秒后清除定时器
        const settimeout = setTimeout(() => {
            /* 在此处销毁，若未到时间关闭页面，重新打开页面，
            会导致setInterval未销毁，仍在浏览器后台执行定时操作 
                反之则完成销毁setInterval定时器*/

            // clearInterval(setinterval)     
            // console.log("setInterval已被清除");

        }, 5000);

        //此为setTimeout的优化方案
        //在页面销毁时清除定时器
        onBeforeUnmount(() => {
            /* 在此处销毁，则关闭页面之后，定时器销毁 ，
            重新打开页面，定时器重新启动*/
            clearInterval(setinterval)
            clearTimeout(settimeout)
            console.log("已销毁");
        })

        return {
            state,  //返回的是响应式的数据
            ...state,  //返回的是非响应式数据，即UI不刷新
            // ...state2,
            name, age,  //返回的是响应式数据，reactive被torefs转换为属性独立的ref响应式数据
        }


    },
})
</script>