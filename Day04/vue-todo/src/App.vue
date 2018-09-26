<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        TodoList
      </div>
      <div class="navbar-nav mr-auto">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/about">About</router-link>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
</style>
