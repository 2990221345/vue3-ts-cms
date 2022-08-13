import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'
export default function registerProperties(app: App) {
  // 全局过滤方法
  /**
   *   $filters.formatTime(value)
   *  @return '2022-08-14 22:00'
   */
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
