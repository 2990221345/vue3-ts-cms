<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs stretch type="border-card" class="tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account></login-account>
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import LoginAccount from '@/views/login/components/login-account.vue'
import LoginPhone from '@/views/login/components/login-phone.vue'
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
}
</style>
