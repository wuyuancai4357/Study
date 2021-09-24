import { ref, onMounted, onBeforeUnmount } from "vue";

export default function() {
  const x = ref(0);
  const y = ref(0);

  //移动的回调
  const mousemoveHandler = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  //鼠标移动获取坐标

  // 渲染时，绑定监听
  onMounted(() => {
    window.addEventListener("mousemove", mousemoveHandler);
  }),
    onBeforeUnmount(() => {
      window.removeEventListener("mousemove", mousemoveHandler);
    });

  return {
    x,
    y,
  };
}
