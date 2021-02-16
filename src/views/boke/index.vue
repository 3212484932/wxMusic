<template>
  <div class="boke-index">
    <!-- 顶部歌单分类的列表 -->
    <van-tabs v-model="active">
      <van-tab :title="item.name" v-for="item in musicsortlist" :key="item.id">
        <!-- 加载分类的路由 -->
        <boke-list></boke-list>
        <!-- /加载分类的路由 -->
      </van-tab>
    </van-tabs>
    <!-- /顶部歌单分类的列表 -->
  </div>
</template>

<script>
import { getRemMusicList } from '../../api/musiclist'
import BokeList from './components/boke-list'

export default {
  name: 'BokeIndex',
  data() {
    return {
      // 当前标签序号
      active: 0,
      // 音乐分类的列表
      musicsortlist: []
    }
  },
  components: {
    BokeList
  },
  created() {
    this.getRemListLoading()
  },
  mounted() {},
  methods: {
    // 获取推荐音乐歌单
    async getRemListLoading() {
      const { data: res } = await getRemMusicList()
      console.log(res)
      this.musicsortlist = res.tags
    }
  }
}
</script>

<style scoped lang="less"></style>
