<template>
    <div>
        <h4>子级组件</h4>
        <h3>msg:{{ msg }}</h3>
        <button @click="update">更新数据</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, onBeforeUnmount, ref } from "vue";

export default defineComponent({
    name: "Child",

    //vue2.x的生命周期函数顺序
    beforeCreate() {
        console.log("2.x的beforeCreate");

    },
    created() {
        console.log("2.x的created");

    },
    beforeMount() {
        console.log("2.x的beforeMount");

    },
    mounted() {
        console.log("2.x的mounted")
    },
    beforeUpdate() {
        console.log("2.x的beforeUpdate");

    },
    updated() {
        console.log("2.x的updated");

    },
    //  The `beforeDestroy` lifecycle hook is deprecated. 
    // Use `beforeUnmount` instead
    // beforeDestroy() {
    //     console.log("2.x的beforeDestroy");

    // },
    beforeUnmount() {
        console.log("2.x的beforeUnmount");

    },
    // The `destroyed` lifecycle hook is deprecated. 
    // Use `unmounted` instead
    // destroyed() {
    //     console.log("2.x的destroyed");

    // },
    unmounted() {
        console.log("2.x的unmounted");

    },



    //vue3的生命周期函数
    //vue3中的setup比vue2.x中的beforeCreate先执行

    setup() {
        console.log("vue3中的setup");
        const msg = ref("123")
        const update = () => {
            msg.value += "+++"
        }

        onBeforeMount(() => {
            console.log("vue3中的onbeforeMount");

        }),
        onMounted(() => {
            console.log("vue3中的onMounted");
            
        }),
        onBeforeUpdate(() => {
            console.log("vue3中的onBeforeUpdate");
            
        }),
        onUpdated(() => {
            console.log("vue3中的onUpdated");
            
        }),
        onBeforeUnmount(() => {
            console.log("Vue3中的onBeforeUnmount");
            
        }),
        onUnmounted(() => {
            console.log("Vue3中的onUnmounted");
            
        })
        return {
            msg,
            update
        }
    }
})
</script>