<template>
  <div class="user">
    <div class="search">
      <HyForm v-bind="SearchFromConfig" v-model="formData"></HyForm>
      <!--  :col-layout="colLayout"-->
    </div>
    <div class="content">内容</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HyForm from '@/base-ui/form'
import { SearchFromConfig } from './config/serch.config'
const formData = ref({
  id: '',
  name: '',
  password: '',
  createTime: ''
})
</script>

<style lang="less" scoped></style>
