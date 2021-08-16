<template>
    <div>
        <h5>AsyncComponent子级组件</h5>
        <slot name="header">hello world</slot>

        <slot name="main">hello world</slot>

        <slot name="footer">{{ msg }}</slot>

        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AsyncComponent",
    setup() {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    msg: '你好'
                })
            }, 1500);
        })

        // return {

        // }
    }
})
</script>