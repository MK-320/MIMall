import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

let isShowingError = false
let errorTimer = null

const showErrorOnce = (msg) => {
  if (isShowingError) return

  isShowingError = true
  Message.error(msg)

  if (errorTimer) clearTimeout(errorTimer)
  errorTimer = setTimeout(() => {
    isShowingError = false
  }, 3000)
}

service.interceptors.response.use(
  response => {
    const { data: res } = response
    const path = location.hash
    if (res.status == 0) {
      return res.data
    } else if (res.status == 10) {
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
