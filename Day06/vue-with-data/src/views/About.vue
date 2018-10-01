<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Counter/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Counter from '../components/Counter.vue'

@Component({components: {Counter}})
export default class About extends Vue {
}

</script>
