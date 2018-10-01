<template>
  <div>
    <h2>First Counter</h2>
    <div>{{count}}</div>
    <button @click="increment()">ADD</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Counter extends Vue {
  get count() {
    return this.$store.state.count
  }
  increment() {
    this.$store.dispatch('incrCountDelay')
  }
}
</script>
