import { createApp } from 'vue'
// import { registerApp } from '@/global'
import { golbalRegisterApp } from '@/global'
import '@/service/axios_demo'
import rootApp from './App.vue'
import router from '@/router/index'
import store from '@/store'
const app = createApp(rootApp)
// element-plus 按需导入 - 采用自动导入插件 unplugin-auto-import,unplugin-vue-components
// element-icon 按需导入模式需要 注册全局才能使用 详见global
app.use(router)
app.use(store)
/**
 * 注册全局icon两种方式 1.通过函数注册传入app实例对象component 通过app.use
 *  */
// registerApp(app) //icon图标的全局应用  element-plus/icons-vue
app.use(golbalRegisterApp) //默认传入 install(app)
app.mount('#app')
