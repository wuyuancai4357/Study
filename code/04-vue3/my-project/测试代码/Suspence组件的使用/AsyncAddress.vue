<template>
    <div>
        <h5>AsyncAddress组件</h5>

        <h3>{{ data }}</h3>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

//引入axios
import axios from 'axios'

export default defineComponent({
    name: "AsyncAddress",
    // setup() {

    //     return axios.get('/data/manUserInformation.json').then(reponse => {
    //         return {
    //             data: reponse.data
    //         }
    //     })
    // }

    async setup() {
        const result=await axios.get('/data/manUserInformation.json')
        return {
            data:result.data
        }
    }
})
</script>