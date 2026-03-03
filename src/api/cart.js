import request from './request'

export const getCartList = () => request({
  url: '/carts',
  method: 'get'
})

export const addToCart = data => request({
  url: '/carts',
  method: 'post',
  data
})

export const updateCart = (productId, data) => request({
  url: `/carts/${productId}`,
  method: 'put',
  data
})

// 非es6 写法
export function deleteCart(productId) {
  return request({
    url: `/carts/${productId}`,
    method: 'delete'
  })
}

export function getCartSum() {
  return request({
    url: '/carts/products/sum',
    method: 'get'
  })
}

export function selectAllCart() {
  return request({
    url: '/carts/selectAll',
    method: 'put'
  })
}

export const unSelectAllCart = () => request({
  url: '/carts/unSelectAll',
  method: 'put'
})
