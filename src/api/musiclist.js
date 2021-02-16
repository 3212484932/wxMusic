import request from '../utils/request.js'

/**
 * 获取歌单分类的列表
 */
export const getRemMusicList = () => {
  return request({
    methods: 'GET',
    url: '/playlist/highquality/tags'
  })
}

/**
 * 获取精品歌单
 */

export const getGoodMusicList = (before, limit) => {
  return request({
    methods: 'GET',
    url: `/top/playlist/highquality?before=${before}&limit=${limit}`
  })
}
