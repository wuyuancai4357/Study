<template>
    <div>
        <h5 :style="{ color }">孙级组件</h5>
        <hr />
    </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
    name: "App",
    setup() {

        //孙级组件接收父父级组件的数据,注入数据
        const color = inject<string>('color')

        return {
            color
        }
    }
})
</script>