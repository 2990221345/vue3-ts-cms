<template>
  <div class="page-modal">
    <el-dialog v-model="DialogVisible" title="新建用户" width="30%" center>
      <HyForm v-bind="modalConfig" v-model="formData"></HyForm>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="DialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineExpose, watch } from 'vue'
import HyForm from '@/base-ui/form'
import store from '@/store'
const DialogVisible = ref(false)
const formData = ref<any>({})
const props = defineProps({
  modalConfig: {
    type: Object,
    require: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    default: () => ''
  }
})
watch(
  () => props.defaultInfo,
  (newVal) => {
    for (const item of props?.modalConfig?.formItems) {
      formData.value[`${item.field}`] = newVal[`${item.field}`]
        ? newVal[`${item.field}`]
        : ''
    }
  }
)
const handleConfirmClick = () => {
  DialogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    // 编辑
    store.dispatch('system/editPageDataAction', {
      pageName: props.pageName,
      editData: { ...formData.value },
      id: props.defaultInfo.id
    })
    console.log('编辑')
  } else {
    // 新增
    store.dispatch('system/createPageDataAction', {
      pageName: props.pageName,
      newData: { ...formData.value }
    })
  }
}
defineExpose({
  DialogVisible
})
</script>

<style lang="less" scoped></style>
