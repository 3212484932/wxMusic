/**
 * 随机生成token 函数
 */

export const randomString = e => {
  e = e || 32
  var t = 'ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghigklmnopqrstuvwxyz2345678'
  var a = t.length
  var n = ''
  for (var i = 0; i < e; i++) {
    n += t.charAt(Math.floor(Math.random() * a))
  }
  return n
}
