<template>
  <div class="goods">
    <PageSearch
      :SearchFromConfig="SearchFromConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="goods"
    >
      <template #image="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
          fit="cover"
        />
      </template>
    </PageContent>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { usePageSearch } from '@/hooks/usePageSearch'
// 页面配置
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { SearchFromConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

const store = useStore()
store.dispatch('system/getPageListAction', {
  pageName: 'goods',
  queryInfo: {
    offset: 0,
    size: 10
  }
})
// 执行hook
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>

<style lang="less" scoped></style>
