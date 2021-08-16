<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <headerVue :addTodo="addTodo"  />
      <!-- 绑定一个自定义属性，子级组件可以通过自定义属性名访问父级组件数据 -->
      <listVue :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
      <footerVue />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, transformVNodeArgs } from "vue";
import footerVue from "./components/footer.vue";
import headerVue from "./components/header.vue";
import listVue from "./components/list.vue";

//引入约束state的类型
import { Todo } from "./type/todo";

export default defineComponent({
  name: "App",

  components: {
    headerVue,
    listVue,
    footerVue,
  },

  setup() {

    //定义一个数组存储数据
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        { id: 1, title: '篮球', isCompleted: true },
        { id: 2, title: '足球', isCompleted: false },
        { id: 3, title: '网球', isCompleted: true }
      ]
    })
    //添加数据
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }
    //删除数据
    const deleteTodo = (index:number) => {
      state.todos.splice(index,1)
    }

    const updateTodo=(todo:Todo,isCompleted:boolean)=>{
      todo.isCompleted=isCompleted
      console.log(todo.isCompleted)
    }


    
   
    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,

    }
  }
})
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>