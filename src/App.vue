<template>
  <div class="app">
    <h2>{{ $store.state.name }}</h2>
    <img src="@/assets/logo.png" alt="" />
    <router-link to="/login">login</router-link>
    <router-link to="/main">main</router-link>
    <el-button type="primary">Primary</el-button>
    <el-button>login</el-button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      name: 'app'
    }
  }
})
</script>
