<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="accountForm"
      :rules="rules"
      label-width="60px"
      :size="formSize"
      status-icon
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="accountForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="accountForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineExpose } from 'vue'
import { useStore } from 'vuex'
import type { FormInstance } from 'element-plus'
import LocalCache from '@/utils/cache'
import { rules } from '@/views/login/config/account-config'
const store = useStore()
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const accountForm = reactive({
  username: LocalCache.getCache('name') ?? '',
  password: LocalCache.getCache('password') ?? ''
})
const loginAction = (keepPassword: boolean) => {
  if (!ruleFormRef.value) return
  ruleFormRef.value?.validate((valid) => {
    if (!valid) return
    // console.log(valid)
    //  判断是否记住密码
    if (keepPassword) {
      // 本地缓存
      LocalCache.setCache('name', accountForm.username)
      LocalCache.setCache('password', accountForm.password)
      // window.localStorage.setItem('username')
    } else {
      LocalCache.deleteCache('name')
      LocalCache.deleteCache('password')
    }
    // 开始进行登录验证
    console.log(store)

    store.dispatch('login/accountLoginAction', { ...accountForm })
  })
}
defineExpose({
  loginAction
})
</script>
<style lang="less" scoped></style>
