import { createApp } from 'vue'
// import { registerApp } from '@/global'
import { golbalRegisterApp } from '@/global'
// import '@/service/axios_demo'
import Hyrequest from '@/service/index'
import rootApp from './App.vue'
import router from '@/router/index'
import store from '@/store'
const app = createApp(rootApp)
// element-plus 按需导入 - 采用自动导入插件 unplugin-auto-import,unplugin-vue-components
// element-icon 按需导入模式需要 注册全局才能使用 详见global
app.use(router)
app.use(store)
// app.use(request)
/**
 * 注册全局icon两种方式 1.通过函数注册传入app实例对象component 通过app.use
 *  */
// registerApp(app) //icon图标的全局应用  element-plus/icons-vue
app.use(golbalRegisterApp) //默认传入 install(app)
app.mount('#app')

console.log('VUE_APP_BASE_URL', process.env.VUE_APP_BASE_URL)
Hyrequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求')
      return config
    },
    responseInterceptor: (res) => {
      console.log('guliguli')

      return res
    }
  }
})
// .then((res) => {
//   console.log(34793749347)

//   console.log(res)
// })
