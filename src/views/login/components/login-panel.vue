<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="currentTab" stretch type="border-card" class="tabs">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="keepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button @click="handelLoginClick" type="primary" class="login-btn"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import utils from '@/utils/utils'
import LoginAccount from '@/views/login/components/login-account.vue'
import LoginPhone from '@/views/login/components/login-phone.vue'
const keepPassword = ref(true)
const currentTab = ref<string>('account')
const debounce = utils.debounce
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
// 登录添加防抖操作 避免多次发送请求
const handelLoginClick = debounce(() => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(keepPassword.value)
  } else {
    // 手机登录
    console.log(phoneRef.value)
  }
}, 300)
</script>

<style lang="less" scoped>
.login-panel {
  margin-top: -100px;
  width: 330px;
  .tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
  }
  .tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
  }
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
