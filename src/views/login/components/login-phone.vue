<template>
  <div>
    <el-form
      ref="phoneFormRef"
      :model="phoneForm"
      :rules="rules"
      label-width="80px"
      :size="formSize"
      status-icon
    >
      <el-form-item label="手机号" prop="name">
        <el-input v-model="phoneForm.name" />
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="get-code">
          <el-input type="password" v-model="phoneForm.password" />
          <div class="get-btn">
            <el-button type="primary">获取验证码</el-button>
          </div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { rules } from '@/views/login/config/account-config'
const formSize = ref('default')
const phoneFormRef = ref<FormInstance>()
const phoneForm = reactive({
  name: '',
  password: ''
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
