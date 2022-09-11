import { Module } from 'vuex'
import { IDashboardState } from './types'
import { IRootState } from '@/store/type'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getaddressGoodsSale
} from '@/service/main/system/analysis/dashboard'
const dashboard: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodCount: [],
      categoryGoodSale: [],
      categoryGoodFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryFavorResult.data)
      const addressGoodsResult = await getaddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoodsResult.data)
    }
  }
}
export default dashboard
