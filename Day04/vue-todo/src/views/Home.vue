<template>
  <div>
    <h1>Todo List</h1>
    <div>
      <div v-for="todo in todos">
        <TodoItem :todo="todo"></TodoItem>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'
export default {
  components: { TodoItem },
  data() {
    return {
      todos: [
        { task: 'first task', done: true },
        { task: 'second task', done: false },
        { task: 'third task', done: true }
      ]
    }
  }
}
</script>
