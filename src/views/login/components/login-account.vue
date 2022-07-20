<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="60px"
      :size="formSize"
      status-icon
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineExpose } from 'vue'
import type { FormInstance } from 'element-plus'
import { rules } from '@/views/login/config/account-config'
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: 'admin',
  password: '123456'
})
const loginAction = () => {
  if (!ruleFormRef.value) return
  ruleFormRef.value.validate((valid) => {
    if (!valid) return
    console.log('校验通过')
  })
}
defineExpose({
  loginAction
})
</script>
<style lang="less" scoped></style>
