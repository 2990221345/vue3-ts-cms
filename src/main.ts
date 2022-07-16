import { createApp } from 'vue'
import { registerApp } from '@/global'
import rootApp from './App.vue'
import router from '@/router/index'
import store from '@/store'
const app = createApp(rootApp)
// element-plus 按需导入 - 采用自动导入插件 unplugin-auto-import,unplugin-vue-components
// element-icon 按需导入模式需要 注册全局才能使用 详见global

app.use(router)
app.use(store)

registerApp(app) //icon图标的全局应用  element-plus/icons-vue
app.mount('#app')
