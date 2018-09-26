<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <li>
        <TodoItem todo="task 1"></TodoItem>
      </li>
      <li>
        <TodoItem todo="task 2"></TodoItem>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'
export default {
  components: { TodoItem },
  data: {
    todos: [
      { task: 'first task', done: true },
      { task: 'second task', done: false },
      { task: 'third task', done: true }
    ]
  }
}
</script>
