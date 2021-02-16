import request from '../utils/request.js'

/**
 * 发送验证码
 */

export const sendPhoneCode = phone => {
  return request({
    methods: 'GET',
    url: `/captcha/sent?phone=${phone}`
  })
}

/**
 * 检验手机号是否被注册
 */
export const checkPhoneCode = phone => {
  return request({
    methods: 'GET',
    url: `/cellphone/existence/check?phone=${phone}`
  })
}

/**
 * 用户注册 修改密码 接口
 */

export const registerUser = (phone, password, code, uname) => {
  return request({
    methods: 'POST',
    url: `/register/cellphone?phone=${phone}&password=${password}&captcha=${code}&nickname=${uname}`
  })
}

/**
 * 用户登录
 */
export const getUserInfo = (phone, password) => {
  return request({
    methods: 'GET',
    url: `/login/cellphone?phone=${phone}&password=${password}`
  })
}

export const getUserInfoDel = uid => {
  return request({
    methods: 'GET',
    url: `/user/detail?uid=${uid}`
  })
}

/**
 * 用户退出登录
 */
export const removeUserInfo = () => {
  return request({
    methods: 'GET',
    url: '/logout'
  })
}

/**
 * 查看登录状态
 */

export const seeUsertaus = () => {
  return request({
    methods: 'GET',
    url: '/login/status'
  })
}

/**
 * 获取用户的登录信息
 */

export const getUserDetail = uid => {
  return request({
    methods: 'GET',
    url: `/user/detail?uid=${uid}`
  })
}

/**
 * 获取用户的账号信息
 */

export const getUserName = () => {
  return request({
    methods: 'GET',
    url: '/user/account'
  })
}

/**
 * 获取国家编码
 */
export const getLocateAddress = () => {
  return request({
    methods: 'GET',
    url: '/countries/code/list'
  })
}

/**
 * 更新用户信息
 */
export const replyUserInfo = (
  gender,
  birthday,
  nickname,
  province,
  city,
  signature
) => {
  return request({
    methods: 'POST',
    url: `/user/update?gender=${gender}&signature=${signature}&city=${city}&nickname=${nickname}&birthday=${birthday}&province=${province}`
  })
}
