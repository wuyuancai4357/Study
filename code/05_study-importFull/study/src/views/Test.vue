<template>
    <div>
        <HelloWorld msg="你好" />
    </div>
    <el-button @click="increment()">按钮</el-button>
    <div>{{ count }}</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import HelloWorld from '../components/HelloWorld.vue';
import store from '../store/index';

export default defineComponent({
    name: "App",
    components: {
        HelloWorld,
    },
    setup() {
        const count = ref(0)
        const increment = () => {
            store.commit('increment', { amount: 1 })
            count.value = store.state.count
            console.log(count.value);
        }
        onMounted(() => {
            count.value = store.state.count
        })
        return {
            count,
            increment
        }
    }
})
</script>
<style>
</style>