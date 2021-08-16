<template>
    <div>
        <h5>子级组件</h5>

        <h3>age:{{ age }}</h3>

        <h5>length:{{ length }}</h5>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, toRef } from "vue";

function useGetLength(age: Ref) {
    return computed(() => {
        return age.value.toString().length
    })

}

export default defineComponent({
    name: "Child",

    props: {
        age: {
            type: Number,
            required: true
        }
    },
    setup(props) {

        const length = useGetLength(toRef(props, 'age'))
        return {
            length,
        }
    }
})
</script>