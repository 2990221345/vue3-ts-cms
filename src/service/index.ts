// service统一出口
import HYRequest from '@/service/request/index'
const hyRequest = new HYRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default hyRequest
