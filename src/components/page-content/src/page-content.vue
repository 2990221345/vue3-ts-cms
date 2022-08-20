<template>
  <div class="page-content">
    <HyTable
      :listData="dataList"
      v-bind="props.contentTableConfig"
      @selectionChange="selectionChange"
    >
      <!-- hander中插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>
      <!-- 状态插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <!--  -->
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
          :total="dataCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </template>
    </HyTable>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineExpose, computed, ref } from 'vue'
import { useStore } from 'vuex'

import { ElMessageBox, ElMessage } from 'element-plus'
import HyTable from '@/base-ui/table'

const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const store = useStore()

// 发送网络请求
const getPageData = (queryInfo: any = {}) => {
  console.log(queryInfo)
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: 0,
      size: 10,
      ...queryInfo
    }
  })
}
getPageData()
// 把方法暴露出去 父组件可通过ref调用
defineExpose({
  getPageData
})
// 从vuex中获取数据
const dataList = computed(() => {
  return store.getters['system/pageListData'](props.pageName)
})
// const userList = computed(() => store.state.system.roleList)
const dataCount = computed(() => store.state.system.userCount)

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
