import axios, { AxiosResponse } from 'axios'
// axios的实例对象
// axios.request({})
// axios配置信息
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 5000
axios
  .get('http://123.207.32.32:8000/home/multidata')
  .then((res: AxiosResponse<void, void>) => {
    console.log(res)
  })
async function getData() {
  // axios.get
  const res = await axios.get('/get', {
    params: {
      name: 'Peach',
      age: 18
    }
  })
  console.log('axios.get', res.data.args)
  // axios.post
  const res2 = await axios.post('/post', {
    data: {
      name: 'Peach2222',
      age: 19
    }
  })
  console.log('axios.post', res2.data.data)
  // axios.all
  const res3 = await axios.all([
    axios.get('/get', { params: { name: 'Peach', age: 18 } }),
    axios.post('/post', { data: { name: 'Peach2222', age: 20 } })
  ])
  console.log('axios.all', res3)
}
getData()
// axios.all() 多个请求，一起返回
axios
  .all([
    axios.get('/get', { params: { name: 'Peach', age: 18 } }),
    axios.post('/post', { data: { name: 'Peach2222', age: 20 } })
  ])
  .then((res) => {
    console.log('axios.all', res)
  })

// // promist本身是可以有类型
// new Promise<string>((resolve) => {
//   resolve('123')
// }).then((res) => {
//   console.log('new Promise', res.length)
// })

// axios的拦截器
// axios.interceptors.request.use()
