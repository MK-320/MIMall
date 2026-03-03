import request from './request'

export const pay = data => request({
  url: '/pay',
  method: 'post',
  data
})
