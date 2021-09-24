<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/Test' }">活动管理</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/About' }">关于</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<el-divider></el-divider>
	<div>777</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import store from "../store/index";

export default defineComponent({
	name: "Test",
	setup() {
		// vuex test 
		const count = ref(0);
		const increment = () => {
			store.commit("increment", { amount: 1 });
			count.value = store.state.count;
			console.log(count.value);
		};
		onMounted(() => {
			count.value = store.state.count;
		});
		return {
		};
	},
});
</script>
<style>
</style>
