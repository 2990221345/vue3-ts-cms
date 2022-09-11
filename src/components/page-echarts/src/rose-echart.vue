<template>
  <div class="rose-echart">
    <baseEchart :option="options"></baseEchart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import baseEchart from '@/base-ui/echart'
import { IDataType } from '../types/index'
const props = defineProps<{
  roseData: IDataType[]
}>()
const options = computed(() => {
  return {
    // legend: {
    //   top: 'bottom'
    // },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: true },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '类别数据',
        type: 'pie',
        radius: [10, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
