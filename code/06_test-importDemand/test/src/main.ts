import { createApp } from "vue";
import App from "./App.vue";
import "element-plus/packages/theme-chalk/src/base.scss";
import { ElButton } from "element-plus";
const components = [ElButton];

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.mount("#app");
