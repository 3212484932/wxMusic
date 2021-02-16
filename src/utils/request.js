import axios from 'axios'

// 创建路由对象
const request = axios.create({
  baseURL: 'http://localhost:3000'
})

// 导出
export default request
