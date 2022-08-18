<template>
  <div class="user">
    <PageSearch :SearchFromConfig="SearchFromConfig"></PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      listType="roleList"
    ></PageContent>
    <div class="content">
      <!--
      <el-pagination layout="prev, pager, next" :total="userCount" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'

// 页面配置
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { SearchFromConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

const store = useStore()
store.dispatch('system/getPageListAction', {
  pageName: 'role',
  queryInfo: {
    offset: 0,
    size: 10
  }
})
</script>

<style lang="less" scoped></style>
