<template>
  <div>
    <div ref="divRef" :style="{ width: '300px', height: '200px' }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
// 基于准备好的dom，初始化echarts实例
const divRef = ref<HTMLElement>()
onMounted(() => {
  // nextTick(() => {
  const echartInstance = echarts.init(divRef.value!)
  // 绘制图表
  const options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  }
  echartInstance.setOption(options)
  // })
})
</script>

<style lang="less" scoped></style>
