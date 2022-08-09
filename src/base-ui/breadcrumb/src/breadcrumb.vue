<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in props.breadcrumb" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { IBreadumb } from '../type/index'
const props = defineProps({
  breadcrumb: {
    type: Array as PropType<IBreadumb[]>,
    default: () => []
  }
})
</script>

<style lang="less" scoped></style>
