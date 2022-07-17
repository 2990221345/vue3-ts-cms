import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type {
  HYRequestInterceptors,
  HYRequestConfig
} from '@/service/request/type'
class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors?.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例对都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器，请求拦截成功')
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器，请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器，响应请求成功')
        return res
      },
      (err) => {
        console.log('所有的实例都有的拦截器，响应请求失败拦截')
        return err
      }
    )
  }
  request(config: HYRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      console.log('请求成功', res)
    })
  }
}

export default HYRequest
