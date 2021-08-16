<template>
  <li
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :style="{ backgroundColor: bgColor, color: myColor }"
  >
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span>&nbsp;{{ todo?.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo">删除</button>
  </li>
</template>
<script lang="ts">
import { Todo } from "@/type/todo";
import { computed, defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "item",
  props: {
    //将todo数据转换为Todo类型，由接口Todo约束
    todo: {
      type: Object as () => Todo,
      requird: true
    },
    index: {
      type: Number,
      requird: true
    },
    delTodo: {
      type: Function,
      required: true,
    },
    updateTodo:{
      type:Function,
      required:true
    }
  },
  // props: ["todo"],
  setup(props) {
    const bgColor = ref("white")
    const myColor = ref("black")
    const isShow = ref(false)

    const mouseHandler = (flag: boolean) => {
      if (flag) {
        bgColor.value = "pink"
        myColor.value = "white"
        isShow.value = true
      }
      else {
        bgColor.value = "white"
        myColor.value = "black"
        isShow.value = false
      }
    }

    const deleteTodo = () => {
      if (window.confirm("确定要删除吗？"))
          props.delTodo(props.index)
      else {
        return
      }
    }

    const isCompleted=computed({
      get(){
        return props.todo?.isCompleted
      },
      set(val){
        props.updateTodo(props.todo,val)
      },
    })

    return {
      mouseHandler,
      isCompleted,
      bgColor,
      myColor,
      isShow,
      deleteTodo,
    }
  }
})
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  margin-top: 6px;
}
li::before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>