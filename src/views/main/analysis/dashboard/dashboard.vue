<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <card title="分类商品数量（饼图）">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
          <!-- <baseEchart :option="pieOptions"></baseEchart> -->
        </card>
      </el-col>
      <el-col :span="10">
        <card title="不同城市商品销量"></card>
      </el-col>
      <el-col :span="7">
        <card title="分类商品数量（玫瑰图）"></card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <card title="分类商品的销量">
          <baseEchart :option="option"></baseEchart>
        </card>
      </el-col>
      <el-col :span="12">
        <card title="分类商品的收藏"></card>
      </el-col>
    </el-row>
    <div
      v-show="false"
      ref="divRef"
      :style="{ width: '600px', height: '500px' }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import card from '@/base-ui/card'
import baseEchart from '@/base-ui/echart'
import { PieEchart } from '@/components/page-echarts/index'
//
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 210, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}
const store = useStore()
store.dispatch('dashboard/getDashboardDataAction')
const categoryGoodsCount = computed(() =>
  store.state.dashboard.categoryGoodCount.map((item: any) => {
    return {
      name: item.name,
      value: item.goodsCount
    }
  })
)
</script>

<style lang="less" scoped>
.dashboard {
  .content-row {
    margin-top: 20px;
  }
}
</style>
