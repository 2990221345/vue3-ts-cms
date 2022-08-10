<template>
  <div class="nav-header">
    <el-icon :size="28" @click="handleFoldClick">
      <Fold v-show="ifFold" />
      <Expand v-show="!ifFold" />
    </el-icon>
    <div class="content">
      <HyBreadcrumb :breadcrumb="breadcrumb"></HyBreadcrumb>
      <userInfoVue></userInfoVue>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import userInfoVue from './user-info.vue'
import HyBreadcrumb, { IBreadumb } from '@/base-ui/breadcrumb/index'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
const emit = defineEmits(['foldChange'])
const ifFold = ref(false)
// 面包屑数据
const store = useStore()
const route = useRoute()
// 当path 或者 userMenu  触发重新计算函数
const breadcrumb = computed(() => {
  const userMenus = store.state.login.userMenus
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})

console.log(breadcrumb)
const handleFoldClick = () => {
  ifFold.value = !ifFold.value
  emit('foldChange', ifFold.value)
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
