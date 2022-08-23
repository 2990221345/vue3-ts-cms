<template>
  <div class="hy-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="props.listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in props.propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <el-pagination
        v-model:currentPage="page.currentPage"
        v-model:page-size="page.pageSize"
        :page-sizes="[10, 20, 30, 50]"
        :small="false"
        :disabled="false"
        :background="false"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listCount"
        listCount
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  listData: {
    type: Array,
    required: true
  },
  listCount: {
    type: Number,
    default: 0
  },
  propList: {
    type: Array as any,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10 })
  }
})
const emit = defineEmits(['selectionChange', 'update:page'])
const handleSelectionChange = (val: any) => {
  emit('selectionChange', val)
}

const handleSizeChange = (val: any) => {
  emit('update:page', { ...props.page, val })
}

const handleCurrentChange = (val: any) => {
  emit('update:page', { ...props.page, val })
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 45px;
  // padding: 0 50px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .handler {
    align-items: center;
  }
}
.footer {
  margin-top: 10px;
  display: flex;
  justify-content: end;
}
</style>
