import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from '@/store/type'
import login from '@/store/login/login'
import system from '@/store/main/system/system'
import { getPageListData } from '@/service/main/system/system'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'Peach',
      age: 19,
      height: '1.88',
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeEntureDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntire(state, list) {
      state.entireRole = list
    }
  },
  getters: {},
  actions: {
    async getInitial({ commit }) {
      // 请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      // 保存数据
      commit('changeEntureDepartment', departmentList)
      commit('changeEntire', roleList)
    }
  },
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitial')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
