<template>
  <div class="user">
    <div class="search">
      <HyForm v-bind="SearchFromConfig"></HyForm>
      <!--  :col-layout="colLayout"-->
    </div>
    <div class="content">内容</div>
  </div>
</template>

<script lang="ts" setup>
import HyForm from '@/base-ui/form'
import { SearchFromConfig } from './config/serch.config'
</script>

<style lang="less" scoped></style>
