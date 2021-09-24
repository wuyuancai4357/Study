<template>
  <div>
    <mapVue></mapVue>
  </div>
</template>
<script lang="js">
import { defineComponent } from "vue";
import mapVue from "./components/map.vue";

export default defineComponent({
  name: "App",
  components: {
    mapVue
  },
  setup() {

    return {

    }
  }
})
</script>
<style>
</style>