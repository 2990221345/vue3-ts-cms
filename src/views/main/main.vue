<template>
  <div class="layout">
    <div>main</div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.layout {
  display: flex;
  justify-content: space-evenly;
}
</style>
