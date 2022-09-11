import * as echart from 'echarts'
// import { EChartsOption } from 'echarts'
import chinaMapData from '../data/china.json' //添加json格式文件 shims-vue.d.ts
echart.registerMap('china', chinaMapData) // echart图表网站 http://analysis.datains.cn/
export default function (el: HTMLElement) {
  const echartDivRef = echart.init(el)
  const setOption = (option: echart.EChartsOption) => {
    echartDivRef.setOption(option)
  }
  const updateSize = () => {
    echartDivRef.resize()
  }
  window.addEventListener('resize', () => {
    echartDivRef.resize()
  })
  return {
    echartDivRef,
    setOption,
    updateSize
  }
}
