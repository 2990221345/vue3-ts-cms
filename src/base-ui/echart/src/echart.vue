<template>
  <div class="base-echart">
    <div
      ref="echartDivRef"
      :style="{ height: props.height, width: props.width }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
// import { EChartsOption } from 'echarts'
import useEcharts from '../hooks/useEchart'
const echartDivRef = ref<HTMLElement>()
// 定义props
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    option: any
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
onMounted(() => {
  // const echartInstance = echart.init(echartDivRef.value!)
  // echartInstance.setOption(props.option)
  const { setOption } = useEcharts(echartDivRef.value!)
  watchEffect(() => {
    setOption(props.option)
  })
})
</script>

<style lang="less" scoped></style>
