import request from './request'

export const login = data => request({
  url: '/user/login',
  method: 'post',
  data
})

export const register = data => request({
  url: '/user/register',
  method: 'post',
  data
})

export const logout = () => request({
  url: '/user/logout',
  method: 'post'
})

export const getUserInfo = () => request({
  url: '/user',
  method: 'get'
})
