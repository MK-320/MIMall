import request from './request'

export const getOrderList = params => request({
  url: '/orders',
  method: 'get',
  params
})

export const getOrderDetail = orderNo => request({
  url: `/orders/${orderNo}`,
  method: 'get'
})

export const createOrder = data => request({
  url: '/orders',
  method: 'post',
  data
})
