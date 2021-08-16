<template>
    <div>
        <h5>子级组件{{color}}</h5>

        <hr>

        <GrandSon></GrandSon>

    </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";

import GrandSon from "./GrandSon.vue";
export default defineComponent({
    name: "Son",

    components:{
    GrandSon
},

    setup() {

        const color = inject("color")
        
        return {
            color
        }
    }
})
</script>