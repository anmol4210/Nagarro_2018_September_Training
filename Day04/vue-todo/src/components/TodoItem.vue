<template>
  <div :class="{done: todo.done}">
    <input type="checkbox" v-model="todo.done">
    <span>{{todo.task}}</span>
  </div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
.done span {
  color: grey;
  text-decoration: line-through;
}
</style>

