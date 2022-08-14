<template>
  <div class="user">
    <PageSearch :SearchFromConfig="SearchFromConfig"></PageSearch>
    <div class="content">
      <HyTable
        :title="title"
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        @selectionChange="selectionChange"
      >
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
            <el-button size="small" @click="editBtn(scope.row.id)"
              >编辑</el-button
            >
            <el-button size="small" @click="deleteBtn(scope.row.id)"
              >删除</el-button
            >
          </div>
        </template>
      </HyTable>
      <!--
      <el-pagination layout="prev, pager, next" :total="userCount" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'
import { SearchFromConfig } from './config/serch.config'
import { useStore } from 'vuex'
import { ElMessageBox, ElMessage } from 'element-plus'

const store = useStore()
store.dispatch('system/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const userList = computed(() => store.state.system.userList)
// const userCount = computed(() => store.state.system.userCount)
interface IPropsList {
  prop: string
  label: string
  minWidth?: string
  slotName?: string
}

const showIndexColumn = true
const showSelectColumn = true
const propList: IPropsList[] = [
  { prop: 'name', label: '用户名', minWidth: '100' },
  { prop: 'realname', label: '真实姓名', minWidth: '100' },
  { prop: 'cellphone', label: '电话号码', minWidth: '120' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '250',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '250',
    slotName: 'updateAt'
  },
  { prop: '', label: '操作', minWidth: '120', slotName: 'handler' }
]
const title = '我是标题'
const selectionChange = (val: any) => {
  const reslut = val.map((item: any) => item.id)
  console.log(reslut)
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
.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
