/**
 * 封装的工具类函数
 * 使用示例 import utils from '@utils/utils.ts'
 * utils.debounce
 */
class utils {
  // 防抖操作
  debounce(fn: any, delay = 1000) {
    let timer: any
    return function () {
      if (timer) clearTimeout(timer)
      timer = setTimeout(fn, delay)
    }
  }
}
export default new utils()
