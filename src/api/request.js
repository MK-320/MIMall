import axios from 'axios'
import { Message } from 'element-ui'
import VueCookie from 'vue-cookie'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})
// 拦截前端请求的拦截器，请求发出去之前就被拦截了
service.interceptors.request.use(
  config => {
    const token = VueCookie.get('token')
    // 拦截前端发起的请求，并从 cookie 获取 token
    if (token) {
      // 设置请求头
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

let isShowingError = false
let errorTimer = null

//这是一个 防抖函数 ，用于 防止短时间内重复显示多个相同的错误提示
const showErrorOnce = (msg) => {
  if (isShowingError) return

  isShowingError = true
  Message.error(msg)

  if (errorTimer) clearTimeout(errorTimer)
  errorTimer = setTimeout(() => {
    isShowingError = false
  }, 3000)
}
// 拦截后端的响应的拦截器
service.interceptors.response.use(
  response => {
    const { data: res } = response
    const path = location.hash
    if (res.status == 0) {
      if (res.msg) {
        //这里提示的作用是为了提示用户未使用自己的环境变量 
        Message.warning(res.msg)
      }
      return res.data
    } else if (res.status == 10) {
      showErrorOnce(res.msg || '登录已过期，请重新登录')
      if (path != '#/index') {
        window.location.href = '/#/login'
      }
      return Promise.reject(res)
    } else {
      showErrorOnce(res.msg || '请求失败')
      return Promise.reject(res)
    }
  },
  error => {
    const { response } = error
    let errorMsg = '服务异常，请稍后重试'

    if (!response) {
      if (error.code === 'ECONNABORTED') {
        errorMsg = '请求超时，请检查网络'
      } else if (error.message.includes('Network Error')) {
        errorMsg = '网络异常，请检查网络连接'
      } else if (!axios.isCancel(error)) {
        errorMsg = '后端服务未启动，请联系管理员'
      }
    } else {
      const status = response.status
      switch (status) {
        case 400:
          errorMsg = response.data?.message || '请求参数错误'
          break
        case 401:
          errorMsg = '未授权，请重新登录'
          break
        case 403:
          errorMsg = '拒绝访问'
          break
        case 404:
          errorMsg = '请求地址不存在'
          break
        case 500:
          errorMsg = '服务器内部错误'
          break
        default:
          errorMsg = response.data?.message || `请求失败(${status})`
      }
    }

    showErrorOnce(errorMsg)
    return Promise.reject(error)
  }
)

export default service
