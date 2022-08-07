<template>
  <div class="nav-header">
    <el-icon :size="28" @click="handleFoldClick">
      <Fold v-show="ifFold" />
      <Expand v-show="!ifFold" />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <div>
        <userInfoVue></userInfoVue>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import userInfoVue from './user-info.vue'
const emit = defineEmits(['foldChange'])
const ifFold = ref(false)
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
