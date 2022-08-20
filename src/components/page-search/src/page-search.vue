<template>
  <div class="page-search">
    <HyForm v-bind="SearchFromConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
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
// 动态读取key 双向绑定
const formItems = props.SearchFromConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref({ ...formOriginData })

// 用户点击了重置
const handleResetClick = () => {
  console.log('点击了重置')
  formData.value = formOriginData
  console.log(formData)
}
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
