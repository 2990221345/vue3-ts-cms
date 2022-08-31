<template>
  <div class="page-content">
    <HyTable
      :listData="dataList"
      :listCount="dataCount"
      v-bind="props.contentTableConfig"
      @selectionChange="selectionChange"
      v-model:page="pageInfo"
    >
      <!-- hander中插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
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
      <!-- 动态插槽 -->
      <template
        v-for="item in otherPropsSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </HyTable>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineExpose, computed, ref, watch } from 'vue'
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
// 0.权限按钮管理

// 1.双向绑定pageInfo
const pageInfo = ref({ currentPage: 0, pageSize: 10 })
watch(pageInfo, () => getPageData())
// 2.发送网络请求
const getPageData = (queryInfo: any = {}) => {
  // console.log(queryInfo)
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()
// 把方法暴露出去 父组件可通过ref调用
defineExpose({
  getPageData
})
// 3.从vuex中获取数据
const dataList = computed(() => {
  return store.getters['system/pageListData'](props.pageName)
})
// const userList = computed(() => store.state.system.roleList)
const dataCount = computed(() => {
  return store.getters['system/pageListCount'](props.pageName)
})

// 4.获取其他的动态插槽名称
const otherPropsSlots = props.contentTableConfig?.propList.filter(
  (item: any) => {
    // if (item.slotName === 'status') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName === 'handler') return false
    return true
  }
)
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
.page-content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
