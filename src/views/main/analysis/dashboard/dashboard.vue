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
        <card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </card>
      </el-col>
      <el-col :span="7">
        <card title="分类商品数量（玫瑰图）">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </card>
      </el-col>
      <el-col :span="12">
        <card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </card>
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
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts/index'
const store = useStore()
// 请求数据
store.dispatch('dashboard/getDashboardDataAction')
// 获取数据
const categoryGoodsCount = computed(() =>
  store.state.dashboard.categoryGoodCount.map((item: any) => {
    return {
      name: item.name,
      value: item.goodsCount
    }
  })
)
const categoryGoodsSale = computed(() => {
  const XLabels: string[] = []
  const values: any[] = []
  const categoryGoodsSale = store.state.dashboard.categoryGoodSale
  for (const item of categoryGoodsSale) {
    XLabels.push(item.name)
    values.push(item.goodsCount)
  }
  return {
    XLabels,
    values
  }
})
const categoryGoodsFavor = computed(() => {
  const XLabels: string[] = []
  const values: any[] = []
  const categoryGoodFavor = store.state.dashboard.categoryGoodFavor
  for (const item of categoryGoodFavor) {
    XLabels.push(item.name)
    values.push(item.goodsFavor)
  }
  return {
    XLabels,
    values
  }
})
const addressGoodsSale = computed(() => {
  return store.state.dashboard.addressGoodsSale.map((item) => {
    return {
      name: item.address,
      value: item.count
    }
  })
})
</script>

<style lang="less" scoped>
.dashboard {
  .content-row {
    margin-top: 20px;
  }
}
</style>
