import request from './request'

export const getShippingList = () => request({
  url: '/shippings',
  method: 'get'
})

export const addShipping = data => request({
  url: '/shippings',
  method: 'post',
  data
})

export const updateShipping = (id, data) => request({
  url: `/shippings/${id}`,
  method: 'put',
  data
})

export const deleteShipping = id => request({
  url: `/shippings/${id}`,
  method: 'delete'
})
