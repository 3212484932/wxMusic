/**
 * 本地存储封装模块
 */

// 本地存储的获取
export const getItem = name => {
  const data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 本地储存的保存
export const setItem = (name, value) => {
  // 如果是 value 是对象， 将value转化为 JSON字符串再保存
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}

// 本地存储的删除
export const removeItem = name => {
  window.localStorage.removeItem(name)
}
