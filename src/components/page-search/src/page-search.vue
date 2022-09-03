<template>
  <div class="page-search">
    <HyForm v-bind="SearchFromConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="Search" @click="hanleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </HyForm>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import HyForm from '@/base-ui/form'
const props = defineProps({
  SearchFromConfig: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['resetBtnClick', 'queryBtnClick'])
// 动态读取key 双向绑定
const formItems = props.SearchFromConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref({ ...formOriginData })
watch(formData, (newVal: any) => {
  console.log(newVal)
})
// 重置
const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[`${key}`] = formOriginData[key]
  }
  // formData.value = formOriginData
  emit('resetBtnClick')
}

// 搜索
const hanleQueryClick = () => {
  emit('queryBtnClick', formData.value)
}
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
