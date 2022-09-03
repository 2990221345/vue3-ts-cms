<template>
  <div class="page-modal">
    <el-dialog v-model="DialogVisible" title="新建用户" width="30%" center>
      <HyForm v-bind="modalConfig" v-model="formData"></HyForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="DialogVisible = false">取消</el-button>
          <el-button type="primary" @click="DialogVisible = false"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import HyForm from '@/base-ui/form'
const DialogVisible = ref(true)
const formData = ref({})
const props = defineProps({
  modalConfig: {
    type: Object,
    require: true
  }
})
</script>

<style lang="less" scoped></style>
