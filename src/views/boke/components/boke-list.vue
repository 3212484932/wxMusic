<template>
  <div class="boke-list">
    <!-- 列表展示 -->
    <van-list
      class="van_list"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
    <!-- /列表展示 -->
  </div>
</template>

<script>
export default {
  name: 'BokeList',
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  created() {},
  mounted() {},
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style scoped lang="less">
.van_list {
  position: fixed;
  top: 90px;
  right: 0;
  left: 0;
  bottom: 124px;
  overflow-y: auto;
}
</style>
