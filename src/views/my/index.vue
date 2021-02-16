<template>
  <div class="my-index">
    <!-- 我的信息 -->
    <!-- 已登录 -->
    <van-cell center class="myinfo_warp" v-if="status === 1" to="/userallinfo">
      <div slot="icon">
        <!-- 图标 -->
        <van-image
          class="avatar"
          round
          width="45"
          height="45"
          :src="useInfoDel.profile.avatarUrl"
        />
      </div>
      <!-- <userallinfo-index></userallinfo-index> -->
      <div slot="title">
        <!-- 标题 -->
        <span class="name">{{ useInfoDel.profile.nickname }}</span>
      </div>
      <div slot="label">
        <!-- 标题下方内容 -->
        <van-button class="user_vip bgc" round size="mini"
          >QIP开通 ></van-button
        >
        <van-button class="user_vip bgc1" round size="mini">Lv.0</van-button>
      </div>
      <div slot="default">
        <div class="arrow_warp">
          <van-icon class="right_btn" name="arrow" size="20" />
        </div>
      </div>
    </van-cell>
    <!-- 未登录 -->
    <van-cell center class="myinfo_warp" v-else to="/login">
      <div slot="icon">
        <!-- 图标 -->
        <!-- <van-image class="avatar" round width="45" height="45" src="" /> -->
        <van-icon
          class="unlogin"
          name="user-circle-o"
          size="50px"
          color="#666"
        />
      </div>
      <div slot="title">
        <!-- 标题 -->
        <span class="name">未登录</span>
      </div>
      <div slot="label">
        <!-- 标题下方内容 -->
        <van-button class="user_vip bgc" round size="mini"
          >QIP开通 ></van-button
        >
        <van-button class="user_vip bgc1" round size="mini">Lv.0</van-button>
      </div>
      <div slot="default">
        <div class="arrow_warp">
          <van-icon class="right_btn" name="arrow" size="20" />
        </div>
      </div>
    </van-cell>
    <!-- /我的信息 -->

    <!-- 我的音乐展示 -->
    <div class="my_music_warp">
      <van-grid column-num="4">
        <van-grid-item class="grid_item" icon="music" text="本地/下载" />
        <van-grid-item class="grid_item" icon="audio" text="云盘" />
        <van-grid-item class="grid_item" icon="checked" text="已购" />
        <van-grid-item class="grid_item" icon="play-circle" text="最近播放" />
        <van-grid-item class="grid_item" icon="friends" text="我的好友" />
        <van-grid-item class="grid_item" icon="star" text="收藏和赞" />
        <van-grid-item class="grid_item" icon="diamond" text="我的博客" />
        <van-grid-item class="grid_item" icon="lock" text="音乐应用" />
      </van-grid>
    </div>
    <!-- /我的音乐展示 -->

    <!-- 我喜欢的音乐 -->
    <div class="love_music_warp">
      <van-cell>
        <div slot="icon">
          <!-- 图标 -->
          <div class="icon-warp">
            <van-icon class="icon_content" name="like" color="#fff" size="28" />
          </div>
        </div>
        <div slot="title" class="music_title">
          <!-- 标题 -->
          <span>我喜欢的音乐</span>
        </div>
        <div slot="label">
          <!-- 标题下方内容 -->
          <span>0</span>首
        </div>
        <div slot="default" class="music_default">
          <van-button class="music_default_btn" size="mini" round
            ><van-icon class="music_icon" name="like-o" />心动模式</van-button
          >
        </div>
      </van-cell>
    </div>
    <!-- /我喜欢的音乐 -->

    <!-- 歌单 -->
    <div class="music_list_warp">
      <van-tabs v-model="active">
        <van-tab title="创建歌单">
          <div class="card">
            <van-cell center>
              <div slot="title" class="list_music">
                创建歌单
              </div>
              <div slot="default">
                <van-icon class="font" name="plus" size="20px" />
                <van-icon class="font" name="sort" size="20px" />
              </div>
            </van-cell>
          </div>
        </van-tab>
        <van-tab title="收藏歌单">
          <div class="card">
            <van-cell center>
              <div slot="title" class="list_music">
                收藏歌单
              </div>
              <div slot="default">
                <van-icon class="font" name="plus" size="20px" />
                <van-icon class="font" name="sort" size="20px" />
              </div>
            </van-cell>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- /歌单 -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
// import UserAllInfoIndex from '../userallinfo/index.vue'
// import { getUserDetail } from '../../api/user'

export default {
  name: 'MyIndex',
  data() {
    return {
      active: 0,
      // 验证登录状态
      status: 0,
      // 保存用户信息
      useInfoDel: []
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created() {
    this.seeUserloading()
  },
  mounted() {},
  methods: {
    // 查看用户登录状态 加载用户信息 的函数
    async seeUserloading() {
      if (!this.userInfo) {
        return this.status
      } else {
        this.status = 1
        this.useInfoDel = this.userInfo
        console.log(this.useInfoDel)
      }

      // 查看用户登录状态
      // 获取用户登录信息
      // const data = await getUserDetail()
      // console.log(data)
      // // 获取用户账号信息
      // const username = await getUserName()
      // console.log(username)
    }
  }
}
</script>

<style scoped lang="less">
.my-index {
  position: fixed;
  top: 46px;
  right: 0;
  left: 0;
  bottom: 124px;
  overflow-y: auto;
  background-color: #f5f5f5;
  .myinfo_warp {
    padding: 20px 30px 0 30px;
    background-color: #f5f5f5;
    .avatar {
      border-radius: 45px;
      border: 3px solid #fff;
      margin-right: 10px;
    }
    .unlogin {
      position: relative;
      top: 3px;
      margin-right: 10px;
    }
    .name {
      font-size: 16px;
      font-weight: 600;
    }
    .user_vip {
      padding: 0 8px;
      // background-color: #bbbbbb;
      .van-button__text {
        font-size: 8px;
      }
    }
    .bgc {
      color: #fff;
      background-color: #bbb;
    }
    .bgc1 {
      color: #333;
      background-color: #fff;
    }
    .right_btn {
      position: relative;
      top: 3px;
    }
  }
  .my_music_warp {
    margin: 20px;
    .grid_item {
      color: #fe5252;
      /deep/ .van-grid-item__text {
        color: #666;
      }
    }
  }
  .love_music_warp {
    margin: 20px;
  }
  .icon-warp {
    border-radius: 10px;
    padding: 12px 14px;
    background-color: #9b9b9b;
    margin-right: 10px;
    .icon_content {
      position: relative;
      top: 3px;
    }
  }
  .music_title {
    margin-top: 5px;
  }
  .music_default {
    margin-top: 12px;
    .music_default_btn {
      padding: 0 11px;
      .music_icon {
        position: relative;
        top: 2px;
        margin-right: 3px;
      }
    }
  }
  .music_list_warp {
    margin: 20px;
  }
  .list_music {
    padding-left: 20px;
  }
  .font {
    margin: 0 5px;
  }
}
</style>
