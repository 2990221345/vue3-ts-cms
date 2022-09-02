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
        <el-button v-if="isCreate" type="primary">新建用户</el-button>
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
          <el-button
            size="small"
            v-if="isUpdate"
            @click="editBtn(scope.row.id)"
            icon="Edit"
            >编辑</el-button
          >
          <el-button
            size="small"
            v-if="isDelete"
            @click="deleteBtn(scope.row.id)"
            icon="Delete"
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
import { usePermission } from '@/hooks/use-permission'

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
// 0.获取操作的权限按钮
const isCreate: boolean = usePermission(props.pageName, 'create')
const isUpdate: boolean = usePermission(props.pageName, 'update')
const isDelete: boolean = usePermission(props.pageName, 'delete')
// isQuery会导致无法查询数据
// const isQuery: boolean = usePermission(props.pageName, 'query')
// 1.双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(pageInfo, () => getPageData())
// 2.发送网络请求
const getPageData = (queryInfo: any = {}) => {
  // console.log(queryInfo)
  // if (!isQuery) return
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
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
