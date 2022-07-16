<template>
  <div>Login</div>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <Edit style="width: 1em; height: 1em; margin-right: 8px" />
  <el-icon><CopyDocument /></el-icon>
  <el-icon><CloseBold /></el-icon>
</template>
<script>
import { ElButton } from 'element-plus'
export default {
  components: { ElButton }
}
</script>
<style scoped></style>
