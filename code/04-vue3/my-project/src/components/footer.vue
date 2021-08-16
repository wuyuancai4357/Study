<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" />
        </label>
        <span>
            <span>已完成{{ count }}</span>
            / 全部{{ todos.length }}
        </span>
        <button class="btn btn-danger" >清除已完成的任务</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "footer",
    setup() {
        const count=0
        const todos=""

        return {
            count,
            todos,
        }
    }
})
</script>
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>