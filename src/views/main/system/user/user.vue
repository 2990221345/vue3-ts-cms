<template>
  <div class="user">
    <PageSearch
      :SearchFromConfig="SearchFromConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></PageSearch>
    <PageContent
      @newBtnClick="hanleNewData"
      @editBtnClick="hanleEditData"
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
    <PageModal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
    ></PageModal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import store from '@/store'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/use-pageModal'
// 页面配置
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { SearchFromConfig } from './config/serch.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

store.dispatch('system/getPageListAction', {
  pageName: 'user',
  queryInfo: {
    offset: 0,
    size: 10
  }
})
const modalConfigRef: any = ref(modalConfig)
// pageModal相关的hook逻辑
const newCallback = () => {
  const passwordItem = modalConfigRef.value.formItems.find(
    (item: any) => item.field === 'password'
  )
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modalConfigRef.value.formItems.find(
    (item: any) => item.field === 'password'
  )
  passwordItem!.isHidden = true
}
// 动态添加部门和角色列表
const departmentItem = modalConfigRef.value.formItems.find(
  (item: any) => item.field === 'departmentId'
)
console.log('departmentItem', departmentItem, departmentItem.options)
departmentItem!.options = store.state?.entireDepartment.map((item) => {
  return {
    value: item.id,
    title: item.name
  }
})
console.log(departmentItem.options)

// 调用hook获取公共变量和函数
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
const [pageModalRef, defaultInfo, hanleNewData, hanleEditData] = usePageModal(
  newCallback,
  editCallback
)
</script>

<style lang="less" scoped></style>
