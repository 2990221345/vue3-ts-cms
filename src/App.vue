<template>
  <div class="app">
    <h2>{{ $store.state.name }}</h2>
    <img src="@/assets/logo.png" alt="" />
    <router-link to="/login">login</router-link>
    <router-link to="/main">main</router-link>
    <router-view></router-view>
  </div>
</template>
