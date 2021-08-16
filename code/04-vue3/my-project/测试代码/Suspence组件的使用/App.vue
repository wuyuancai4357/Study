<template>
  <div>
    <h5>Suspence组件</h5>
    <h6>允许我们的应用程序在等待异步组件时渲染一些后备内容，可以让我们创建一个平滑的用户体验</h6>

    <h4>父级组件</h4>

    <Suspense>
      <template v-slot:default>
        <!--异步组件-->
        <!-- <AsyncComponent></AsyncComponent> -->
        <AsyncAddress></AsyncAddress>
      </template>
      <template v-slot:fallback>
        <!-- loading内容 -->
        <h2>loading......</h2>
      </template>
    </Suspense>
  </div>

  <!-- <AsyncComponent>
    <template v-slot:header>
      <span>这是拥有命名的slot的默认内容</span>
    </template>
    <template v-slot:main>
      <span>这是拥有命名的slot的默认内容</span>
    </template>
    <template v-slot:footer>
      <span>这是拥有命名的slot的默认内容</span>
    </template>
    <button>测试</button>
  </AsyncComponent> -->


</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

//Vue2 动态引入组件(vue3不支持)：
// const AsyncComponent = () => import('./AsyncComponent.vue')
//Vue3 静态引入组件
import AsyncComponent from './AsyncComponent.vue'
import AsyncAddress from './AsyncAddress.vue'
// Vue3 动态引入组件
// const AsyncComponent = defineAsyncComponent(() => import('./AsyncComponent.vue'));
export default defineComponent({
  name: "App",
  components: {
    // AsyncComponent,
    AsyncAddress,
  },
  setup() {
    return {};
  },
});
</script>
