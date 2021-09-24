<template>
    <div style="width:100%;height:800px;" id="container"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "map",
    setup() {
        onMounted(() => {
            mapinit();
        });

        const mapinit = () => {

            let map = new AMap.Map("container", {
                resizeEnable: true,
                center: [120, 36],
                zoom: 18
            })
            let marker = new AMap.Marker({
                icon: "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
                position: [120, 36],
            })
            marker.setMap(map)
        }

        return {

        }
    }
})
</script>
<style>
</style>