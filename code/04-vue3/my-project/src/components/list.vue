<template>
    <ul class="todo-main"  >
        <!-- 通过 :todo 的方式将整个todos中的对象数据传给子级组件 -->
        <item v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :index="Number(index)" :delTodo="deleteTodo" :updateTodo="updateTodo"/>
    </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import item from "./item.vue";

export default defineComponent({
    name: "list",
    components: {
        item,
    },
    props: ["todos","deleteTodo","updateTodo"],
    setup(props) {
        

        return {
        };
    },
});
</script>
<style scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}
.todo-empty{
  height: 40px;
  line-height: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
