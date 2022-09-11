<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="7">1</el-col>
      <el-col :span="10">2</el-col>
      <el-col :span="7">3</el-col>
    </el-row>
    <div ref="divRef" :style="{ width: '600px', height: '500px' }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from '@/store'
import * as echarts from 'echarts'
// 基于准备好的dom，初始化echarts实例
const divRef = ref<HTMLElement>()
onMounted(() => {
  // nextTick(() => {
  const echartInstance = echarts.init(divRef.value!, {
    renderer: 'svg'
  })
  // 绘制图表
  const options = {
    title: {
      text: 'ECharts 入门示例'
      // subtext: '哈哈哈啊'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }
  echartInstance.setOption(options)
})

const store = useStore()
store.dispatch('dashboard/getDashboardDataAction')
</script>

<style lang="less" scoped>
.dashboard {
}
</style>
