<template>
  <div class="user">
    <PageSearch :SearchFromConfig="SearchFromConfig"></PageSearch>
    <div class="content">
      <HyTable :listData="userList" :propList="propList">
        <template #status="scope">
          <el-tag>{{ scope.row.enable ? '启用' : '禁用' }}</el-tag>
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
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

const store = useStore()
store.dispatch('system/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const userList = computed(() => store.state.system.userList)
const userCount = computed(() => store.state.system.userCount)
const propList = [
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
  { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' }
]
</script>

<style lang="less" scoped>
.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
