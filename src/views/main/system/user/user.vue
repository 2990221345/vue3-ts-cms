<template>
  <div class="user">
    <PageSearch :SearchFromConfig="SearchFromConfig"></PageSearch>
    <PageContent :contentTableConfig="contentTableConfig"></PageContent>
    <div class="content">
      <!-- :title="title"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn" -->
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
import { SearchFromConfig } from './config/serch.config'
import { contentTableConfig } from './config/content.config'

const store = useStore()
store.dispatch('system/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})
</script>

<style lang="less" scoped></style>
