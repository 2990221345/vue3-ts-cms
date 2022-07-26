import { createStore } from 'vuex'
import { IRootState } from '@/store/type'
import login from '@/store/login/login'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'Peach',
      age: 19,
      height: '1.88'
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})
export default store
