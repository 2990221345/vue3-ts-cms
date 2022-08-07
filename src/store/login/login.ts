import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestLoginUserInfoById,
  requestUserMenusByIdRoleId
} from '@/service/login/ index'

import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import {} from 'vue-router'
import router from '@/router'
// type
import { IAccount } from '@/service/login/type'
import { ILoginState } from '@/store/login/type'
import { IRootState } from '@/store/type'

const loginModule: Module<ILoginState, IRootState> = {
  // 模块化给个命名空间 true
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      // userMenus => routes //过滤路由表
      console.log('注册动态路由')

      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route) //动态添加路由
        // 添加一条新的路由记录作为现有路由的子路由。如果路由有一个 name，并且已经有一个与之名字相同的路由，它会先删除之前的路由
      })
      // console.log('最终路由表', router.options.routes)
      // router.options.routes[2].children = routes
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 2.请求用户信息
      const userInfoResult = await requestLoginUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      // 3.请求用户菜单
      const userMenuResult = await requestUserMenusByIdRoleId(userInfo.role.id)
      const userMenus = userMenuResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      // 4.跳到首页
      router.push('/main')
    },
    // vuex 持久化
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
