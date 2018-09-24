let app = new Vue({
  el: '#app',
  data: {
    title: 'Todo List'
  },
  methods: {
    titleUpperCase() {
      this.title = this.title.toUpperCase()
    },
    titleLowerCase() {
      this.title = this.title.toLowerCase()
    }
  }
})
