<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        TodoList
      </div>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
</style>
