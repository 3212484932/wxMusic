<template>
  <div class="home-index">
    <!-- 顶部搜索栏 -->
    <!-- <van-nav-bar center @click-left="onClickLeft">
      <div slot="left">
        <van-icon
          @click="myMessageShow = true"
          class="pos"
          name="wap-nav"
          size="25"
          dot
        />
      </div>
      <div slot="title">
        <van-search
          @click="searchShow = true"
          class="search-warp"
          v-model="searchText"
          shape="round"
          placeholder="请输入搜索关键词"
        />
      </div>
      <div slot="right">
        <van-icon class="pos" name="music" size="25" />
      </div>
    </van-nav-bar> -->
    <!-- /顶部搜索栏 -->

    <div class="post">
      <!-- 轮播图页面 -->
      <van-swipe
        class="swipe"
        :loop="false"
        :autoplay="3000"
        :width="356"
        :height="156"
      >
        <van-swipe-item>
          <img class="imgs" src="./sw1.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img class="imgs" src="./sw2.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img class="imgs" src="./sw3.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img class="imgs" src="./sw4.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img class="imgs" src="./sw5.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img class="imgs" src="./sw6.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img class="imgs" src="./sw7.jpg" alt="" />
        </van-swipe-item>
      </van-swipe>
      <!-- /轮播图页面 -->

      <!-- 二级导航栏 -->
      <van-grid :column-num="5" class="erBar" :border="false">
        <van-grid-item class="bar_list" icon="shop" text="每日推荐" />
        <van-grid-item class="bar_list" icon="live" text="私人FM" />
        <van-grid-item class="bar_list" icon="graphic" text="歌单" to="/boke" />
        <van-grid-item class="bar_list" icon="fire" text="排行榜" />
        <van-grid-item class="bar_list" icon="service" text="直播" />
      </van-grid>
      <!-- /二级导航栏 -->

      <!-- 推荐歌单 -->
      <van-cell>
        <div slot="title">推荐歌单</div>
        <div slot="default">
          <van-button class="more_btn" size="mini" round>更多 ></van-button>
        </div>
      </van-cell>
      <van-grid :border="false" :column-num="3" :gutter="10">
        <van-grid-item class="list_warp">
          <div class="number">
            <van-icon name="play-circle-o" />
            <span class="number_text">28617</span>
          </div>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          <span class="list_item_text">生活减压剂|融合枯燥的轻松旋律</span>
        </van-grid-item>
        <van-grid-item class="list_warp">
          <div class="number">
            <van-icon name="play-circle-o" />
            <span class="number_text">28617</span>
          </div>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          <span class="list_item_text">生活减压剂|融合枯燥的轻松旋律</span>
        </van-grid-item>
        <van-grid-item class="list_warp">
          <div class="number">
            <van-icon name="play-circle-o" />
            <span class="number_text">28617</span>
          </div>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          <span class="list_item_text">生活减压剂|融合枯燥的轻松旋律</span>
        </van-grid-item>
      </van-grid>
      <!-- /推荐歌单 -->
      <div class="mar_10"></div>

      <!-- 精选音乐视频 -->
      <van-cell>
        <div slot="title">精选音乐视频</div>
        <div slot="default">
          <van-button class="more_btn" size="mini" round>更多 ></van-button>
        </div>
      </van-cell>
      <van-grid :border="false" :column-num="3" :gutter="10">
        <van-grid-item class="list_warp">
          <div class="number">
            <van-icon name="play-circle-o" />
            <span class="number_text">28617</span>
          </div>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          <span class="list_item_text">生活减压剂|融合枯燥的轻松旋律</span>
        </van-grid-item>
        <van-grid-item class="list_warp">
          <div class="number">
            <van-icon name="play-circle-o" />
            <span class="number_text">28617</span>
          </div>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          <span class="list_item_text">生活减压剂|融合枯燥的轻松旋律</span>
        </van-grid-item>
        <van-grid-item class="list_warp">
          <div class="number">
            <van-icon name="play-circle-o" />
            <span class="number_text">28617</span>
          </div>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          <span class="list_item_text">生活减压剂|融合枯燥的轻松旋律</span>
        </van-grid-item>
      </van-grid>
      <!-- /精选音乐视频 -->

      <!-- 不可错过的欧美金曲 -->
      <van-cell>
        <div slot="title">精选音乐视频</div>
        <div slot="default">
          <van-button class="more_btn" size="mini" round>更多 ></van-button>
        </div>
      </van-cell>
      <van-cell-group>
        <van-cell>
          <div class="om_list_warp" slot="icon">
            <van-icon class="start" name="play" />
            <van-image
              class="music_image"
              width="55"
              height="55"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <div class="music_title" slot="title">
            Faded <span class="music_anthor">-anthor</span>
          </div>
          <div class="music_bottom" slot="label">超过66%人播放</div>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell>
          <div class="om_list_warp" slot="icon">
            <van-icon class="start" name="play" />
            <van-image
              class="music_image"
              width="55"
              height="55"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <div class="music_title" slot="title">
            Faded <span class="music_anthor">-anthor</span>
          </div>
          <div class="music_bottom" slot="label">超过66%人播放</div>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell>
          <div class="om_list_warp" slot="icon">
            <van-icon class="start" name="play" />
            <van-image
              class="music_image"
              width="55"
              height="55"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <div class="music_title" slot="title">
            Faded <span class="music_anthor">-anthor</span>
          </div>
          <div class="music_bottom" slot="label">超过66%人播放</div>
        </van-cell>
      </van-cell-group>

      <!-- /不可错过的欧美金曲 -->

      <!-- 专属场景歌 -->
      <van-cell>
        <div slot="title">专属场景歌</div>
        <div slot="default">
          <van-button class="more_btn" size="mini" round>更多 ></van-button>
        </div>
      </van-cell>
      <van-grid :border="false" :column-num="3" :gutter="10">
        <van-grid-item class="list_warp">
          <div class="number">
            <van-icon name="play-circle-o" />
            <span class="number_text">28617</span>
          </div>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          <span class="list_item_text">生活减压剂|融合枯燥的轻松旋律</span>
        </van-grid-item>
        <van-grid-item class="list_warp">
          <div class="number">
            <van-icon name="play-circle-o" />
            <span class="number_text">28617</span>
          </div>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          <span class="list_item_text">生活减压剂|融合枯燥的轻松旋律</span>
        </van-grid-item>
        <van-grid-item class="list_warp">
          <div class="number">
            <van-icon name="play-circle-o" />
            <span class="number_text">28617</span>
          </div>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          <span class="list_item_text">生活减压剂|融合枯燥的轻松旋律</span>
        </van-grid-item>
      </van-grid>
      <!-- /专属场景歌 -->
    </div>

    <!-- 搜索弹出层 -->
    <van-popup
      v-model="searchShow"
      position="bottom"
      :style="{ height: '80%' }"
    >
      <div>搜索信息</div>
    </van-popup>
    <!-- /搜索弹出层 -->
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data() {
    return {
      // 控制我的信息显示与隐藏
      myMessageShow: false,
      // 控制搜索的显示与退出
      searchShow: false
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="less">
// .search-warp {
//   padding: 0 20px;
// }
// .pos {
//   position: relative;
//   top: 4px;
//   color: #2f2f2f;
// }
.swipe {
  margin: 18px 10px;
  background-color: #39a9ed;
  border-radius: 15px;
}
.imgs {
  width: 356px;
  height: 156px;
}
.bar_list {
  border-bottom: 1px solid #e6e6e6;
  /deep/ .van-icon {
    background-color: #fff1f1;
    border-radius: 30px;
    padding: 10px;
    color: #fe3a3b;
  }
  /deep/ .van-grid-item__text {
    color: #333333;
    font-size: 12px;
  }
}
.more_btn {
  position: relative;
  padding: 0 8px;
  top: -5px;
}
.list_item_text {
  font-size: 12px;
}
.list_warp {
  position: relative;
  font-size: 10px;
  .number {
    display: flex;
    justify-content: center;
    background-color: rgba(204, 204, 204, 0.3);
    padding: 4px 8px;
    border-radius: 20px;
    position: absolute;
    top: 5px;
    right: 10px;
    z-index: 10;
    .number_text {
      margin-left: 4px;
    }
  }
}
.mar_10 {
  height: 10px;
  background-color: #f5f5f5;
}
.post {
  position: fixed;
  top: 46px;
  left: 0;
  right: 0;
  bottom: 124px;
  overflow-y: auto;
}
.om_list_warp {
  margin: 0 14px;
  position: relative;
  /deep/ .van-image__img {
    border-radius: 12px;
  }
  .start {
    position: absolute;
    z-index: 10;
    top: 12px;
    left: 12px;
    font-size: 35px;
    color: rgba(204, 204, 204, 0.6);
  }
}
.music_title {
  color: #333333;
  font-size: 18px;
  .music_anthor {
    font-size: 14px;
    color: #999999;
  }
}
.music_bottom {
  color: #efac15;
}
</style>
