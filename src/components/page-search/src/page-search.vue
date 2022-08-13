<template>
  <div class="page-search">
    <HyForm v-bind="SearchFromConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="Refresh">重置</el-button>
          <el-button type="primary" icon="Search">搜索</el-button>
        </div>
      </template>
    </HyForm>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import HyForm from '@/base-ui/form'
const props = defineProps({
  SearchFromConfig: {
    type: Object,
    required: true
  }
})
const formData = ref({
  id: '',
  name: '',
  password: '',
  createTime: ''
})
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
