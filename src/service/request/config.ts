// 1.方式一 手动切换不用的环境（不推荐）
// const VUE_APP_BASE_URL = 'http://coderwhy.org/dev'
// const VUE_APP_BASE_URL = 'http://coderwhy.org/prod'

// 2.根据process.env.NODE_ENV
let baseUrl = ''
const baseName = 'api'
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://coderwhy.org/dev'
} else {
  baseUrl = 'http://coderwhy.org/dev'
}
export { baseUrl, baseName }
