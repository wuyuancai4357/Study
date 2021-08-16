<template>
  <div>
    <h5>计算属性和监视</h5>

    <fieldset>
      <legend>姓名操作</legend>
      <span>姓氏：</span>
      <input type="text" placeholder="请输入姓氏" v-model="user.firstname" />
      <br />
      <span>名字：</span>
      <input type="text" placeholder="请输入名字" v-model="user.lastname" />
    </fieldset>

    <fieldset>
      <legend>计算属性和监视</legend>
      <span>姓名：</span>
      <input type="text" placeholder="显示姓名" v-model="fullName1" />
      <br />
      <span>姓名：</span>
      <input type="text" placeholder="显示姓名" v-model="fullName2" />
      <br />
      <span>姓名：</span>
      <input type="text" placeholder="显示姓名" v-model="fullName3" />
    </fieldset>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, watch, watchEffect } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstname: "诸葛",
      lastname: "孔明"
    })
    //computed返回的是ref类型对象
    //cmputed 中如果是传入简单回调函数，那么就自动调用get方法
    const fullName1 = computed(() => {
      return user.firstname + '&' + user.lastname
    })

    //
    const fullName2 = computed({
      get() {
        return user.firstname + '&' + user.lastname
      },

      set(value: string) {
        const names = value.split("&")
        user.firstname = names[0]
        user.lastname = names[1]
      }

    })

    const fullName3 = ref("")
    // watch,监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
    // 默认初始时不执行回调, 但可以通过配置 immediate 为 true, 来指定初始时立即执行第一次
    // 通过配置 deep 为 true, 来指定深度监视
    watch(user, ({ firstname, lastname }) => {
      fullName3.value = firstname + "&" + lastname
    }, { immediate: true, deep: true })


    // watch多个数据:
    //   使用数组来指定
    //   如果是ref对象, 直接指定
    //   如果是reactive对象中的属性,  必须通过函数来指定
    watch([() => user.firstname, () => user.lastname, fullName3], val => {
      console.log('监视多个数据', val)
    })

    // watchEffect默认立即执行一次监视
    // 不用指定监视的数据，在回调函数中使用的数据自动监视
    // watchEffect(()=>{
    //   fullName3.value = user.firstname + "&" +user.lastname
    // })

    watchEffect(() => {
      const names = fullName3.value.split("&")
      user.firstname = names[0]
      user.lastname = names[1]
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }
})
</script>