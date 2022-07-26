import { Module } from 'vuex'
import { ILoginState } from '@/store/login/type'
import { IRootState } from '@/store/type'

const loginModule: Module<ILoginState, IRootState> = {
  // 模块化给个命名空间 true
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('accountLoginAction')
      console.log(payload)
    }
  }
}

export default loginModule
