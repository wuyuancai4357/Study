<template>
  <div>very good!</div>
  <h4>测试reactive</h4>
  <h3>名字:{{ user.name }}</h3>
  <h4>性别：{{ user.gender }}</h4>
  <h5>年龄：{{ user.age }}</h5>
  <h6>生日：{{ user.birth }}</h6>
  <h4>媳妇：{{ user.wife.name }}</h4>
  <h5>性别:{{ user.wife.gender }}</h5>
  <h5>年龄：{{ user.wife.age }}</h5>
  <h3>有{{ user.wife.car[0] }}和{{ user.wife.car[1] }}两辆车</h3>

  <input type="text" name="t1" id="t1" />
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  //test ref对象
  setup() {
    //把复杂的数据变成响应式数据，返回的user是proxy代理对象,reactive里的数据是目标对象
    // const obj:any=({  //obj.gender="男" &delete obj.age 需要此定义方式才不报错
    const obj = ({
      name: "小明",
      age: 18,
      wife: {
        name: "小红",
        age: 15,
        car: ["大众", "奥迪"]
      }

    })
    const user = reactive<any>(obj) //若不使用obj.gender的定义方式定义obj，则需要使用此方式定义user，才能正常使用user.gender & delete user.age
    const update = () => {
      // user.name+="=="

      //添加对象的属性
      //obj.gender = "男"//仅界面不渲染，数据仍然操作成功
      //user.gender="男"//界面要渲染
      //删除对象的一个属性
      // delete obj.age //界面不渲染，数据仍然操作成功
      // delete user.age //界面要渲染

      ////总结:如果操作代理对象,目标对象中的数据也会随之变化,同时如果想要在操作数据的时候,界面也要跟着重新更新渲染， 那么也是操作代理对象

      //通过当前代理对象操作属性，更改属性值,添加新属性

      user.wife.car[0] = "布加迪"   //可以实现数据的更新

      user.birth = "2000.03.16"    //可以实现属性的添加

    }


    return {
      user,
      update
    };
  }
});
</script>