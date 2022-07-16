//引入vue里面的App类型
import { App } from 'vue'
// element-icon图标的全局应用
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default function (app: App): void {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component) //component render((h) return)
  }
}
