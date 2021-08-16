<template>
    <div>子级组件</div>
    <h4>msg:{{ msg }}</h4>
    <!-- <h4>count:{{ count }}</h4> -->

    <button @click="emitupdate">emit分发事件</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Child",
    props: ["msg"],

    //setup执行时机,在beforecreate之前执行,setup执行时,
    //输出的this是undefined，组件还没有创建出来(即组件实例对象this不能用)
    //也不能通过this调用data/computed/methods/props中的内容
    //也不能调用所有的composition api的回调函数
    //beforecreate在mounted之前执行

    //setup返回的是一个对象，属性和方法是在HTML中使用的
    //data的返回对象和setup的返回对象的属性和方法都可以在HTML中使用
    //data对象和setup的返回对象的属性会合并成组件对象的属性
    //methods对象和setup的返回对象的方法会合并成组件对象的方法
    //三者不要混用，setup方法中不能访问data和methods中的属性和方法

    //setup的参数
    //props参数是一个对象，值是父级组件向子级组件传递的数据，并且是在子级组件中用props接收的所有的属性值
    //context参数是一个对象，里面有attrs对象（获取当前组件标签上没有在props中声明接收的的所有属性），
    //                          emit对象中的第一个参数是事件（非方法）,第二个参数是事件方法的传递值
    //                          

    // data() {
    //     return {
    //         count: 5
    //     }
    // },

    setup(props, { attrs, emit, slots }) {

        console.log(props);
        console.log(attrs);


        console.log("setup执行了", this);

        const showMsgSetup = () => {
            console.log("setup中的方法")
        }

        function emitupdate() {
            emit("xxx", "===")
        }

        return {
            //一般返回对象
            showMsgSetup,
            emitupdate
        };
    },
    // beforeCreate() {
    //     console.log("beforecreate执行了");
    // },
    // // 界面渲染完毕
    // mounted() {
    //     console.log(this);
    // },

    // methods: {
    //     showMsgMethods() {
    //         console.log("methods中的方法");

    //     },
    // },
});
</script>
