//发送异步请求

import { ref } from "@vue/reactivity";

import axios from "axios";

export default function<T>(url: string) {
  //加载状态
  const loading = ref(true);
  //请求的数据
  const data = ref<T>();
  //错误信息
  const errorMsg = ref("");
  //发送请求
  axios
    .get(url)
    .then((response) => {
      //改变加载状态
      loading.value = false;
      data.value = response.data;
    })
    .catch((error) => {
      console.error("请求失败");
      loading.value = false;
      errorMsg.value = error.message || "未知";
    });

  return {
    loading,
    data,
    errorMsg,
  };
}
