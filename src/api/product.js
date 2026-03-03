import request from './request'

export const getProductList = params => request({
  url: '/products',
  method: 'get',
  params
})

export const getProductDetail = id => request({
  url: `/products/${id}`,
  method: 'get'
})
