import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'
export default function registerProperties(app: App) {
  // 全局过滤方法
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
