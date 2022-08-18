<template>
  <div class="page-content">
    <HyTable
      :listData="userList"
      v-bind="props.contentTableConfig"
      @selectionChange="selectionChange"
    >
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button size="small" @click="editBtn(scope.row.id)" icon="Edit"
            >编辑</el-button
          >
          <el-button size="small" @click="deleteBtn(scope.row.id)" icon="Delete"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 分页器 -->
      <template #footer>
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="userCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </template>
    </HyTable>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue'
import { useStore } from 'vuex'

import { ElMessageBox, ElMessage } from 'element-plus'
import HyTable from '@/base-ui/table'

const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  listType: {
    type: String,
    default: () => ''
  }
})
const store = useStore()
const userList = computed(() => store.state.system[props.listType])
// const userList = computed(() => store.state.system.roleList)
const userCount = computed(() => store.state.system.userCount)

const currentPage4 = ref(1)
const pageSize4 = ref(10)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const selectionChange = (val: any) => {
  const reslut = val.map((item: any) => item.id)
  console.log(reslut)
}
const handleSizeChange = (val: any) => {
  console.log(val)
}

const handleCurrentChange = (val: any) => {
  console.log(val)
}
// 编辑 删除
const editBtn = (id: number) => {
  console.log(id)
}

const deleteBtn = (id: number) => {
  console.log(id)
  ElMessageBox.confirm('此操作将删除该条数据，确认删除吗？', '警告    ', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      })
    })
}
</script>

<style lang="less" scoped>
.page-content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
