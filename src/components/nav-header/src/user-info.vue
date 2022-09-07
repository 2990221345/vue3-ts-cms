<template>
  <div class="user-info">
    <div class="operation">
      <span
        ><el-icon :size="20"><Bell /></el-icon>
      </span>
      <span
        ><el-icon :size="20"><ChatDotRound /></el-icon>
      </span>
      <span
        ><el-icon :size="20"><CreditCard /></el-icon>
      </span>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
        />
        <span class="name">{{ username }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="CircleClose" @click="handleExitClick"
            >退出登陆</el-dropdown-item
          >
          <el-dropdown-item icon="InfoFilled">用户信息</el-dropdown-item>
          <el-dropdown-item icon="Lock">系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const username = computed(() => store.state.login.userInfo.name)
const handleExitClick = () => {
  LocalCache.deleteCache('token')
  router.push('/main')
}
</script>

<style lang="less" scoped>
.user-info {
  display: flex;
  .operation {
    margin-right: 20px;
    span {
      display: inline-block;
      width: 40px;
      height: 35px;
      line-height: 35px;
    }
  }
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  .name {
    margin-left: 8px;
  }
}
</style>
