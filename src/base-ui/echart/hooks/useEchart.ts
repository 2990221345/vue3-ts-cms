import * as echart from 'echarts'
// import { EChartsOption } from 'echarts'
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
