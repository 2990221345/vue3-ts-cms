<template>
  <div class="user">
    <PageSearch
      :SearchFromConfig="SearchFromConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="user"
    >
      <!-- 状态插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
    </PageContent>
    <!-- dialog -->
    <PageModal :modalConfig="modalConfig"></PageModal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { usePageSearch } from '@/hooks/usePageSearch'
// 页面配置
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { SearchFromConfig } from './config/serch.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

const DialogVisible = ref(true)
const formData = ref({})
const handleClose = () => null
const store = useStore()
store.dispatch('system/getPageListAction', {
  pageName: 'user',
  queryInfo: {
    offset: 0,
    size: 10
  }
})
// 执行hook
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>

<style lang="less" scoped></style>
