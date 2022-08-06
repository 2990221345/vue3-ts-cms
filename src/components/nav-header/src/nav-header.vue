<template>
  <div class="nav-header">
    <el-icon></el-icon>
    <el-icon :size="28" @click="handleFoldClick">
      <Fold v-show="ifFold" />
      <Expand v-show="!ifFold" />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['foldChange'])
const ifFold = ref(false)
const handleFoldClick = () => {
  ifFold.value = !ifFold.value
  emit('foldChange', ifFold.value)
}
</script>

<style lang="less" scoped></style>
