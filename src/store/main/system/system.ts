import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { ISystemState } from './types'

import {
  deletePageData,
  getPageListData,
  createPageData,
  editPageData
} from '@/service/main/system/system'
import utils from '@/utils/utils'
const systemModule: Module<ISystemState, IRootState> = {
  // 模块化给个命名空间 true
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`] ?? []
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      let pageUrl = ''
      switch (payload.pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
        case 'goods':
          pageUrl = '/goods/list'
          break
        case 'menu':
          pageUrl = '/menu/list'
          break
      }
      const pageRestult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageRestult.data
      // console.log(utils.titleCase(payload.pageName))
      commit(`change${utils.titleCase(payload.pageName)}List`, list)
      commit(`change${utils.titleCase(payload.pageName)}Count`, totalCount)
    },
    // 删除接口
    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const PageUrl = `/${pageName}s/${id}`
      // 发送删除请求
      await deletePageData(PageUrl)
      // 删除后重新请求菜单数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    // 新增
    async createPageDataAction({ dispatch }, payload: any) {
      // 创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}s`
      await createPageData(pageUrl, newData)
      // 请求最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    // 编辑
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
