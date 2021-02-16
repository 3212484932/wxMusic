<template>
  <div class="layout-index">
    <!-- 顶部搜索栏 -->
    <van-nav-bar center @click-left="onClickLeft">
      <div slot="left">
        <van-icon
          @click="myMessageInfo"
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
    </van-nav-bar>
    <!-- /顶部搜索栏 -->
    <router-view />
    <!-- 播放器核心 -->
    <van-cell class="music_kernel" center>
      <div slot="icon">
        <van-image
          class="music_warp"
          width="35"
          height="35"
          round
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div slot="title" class="title">
        为你写诗<span class="music_anthor"> - 吴克群</span>
      </div>
      <div slot="default" class="default_warp">
        <div class="play_btn">
          <van-icon
            name="pause-circle-o"
            size="35px"
            color="#333333"
            @click="playaudio()"
            v-if="audioBtn"
          />
          <van-icon
            v-else
            ref="playBtn"
            name="play-circle-o"
            @click="playaudio()"
            size="35px"
            color="#333333"
          />
        </div>
        <div class="music_list">
          <van-icon
            name="bars"
            size="35px"
            color="#333333"
            @click="musicListShow = true"
          />
        </div>
      </div>
    </van-cell>
    <audio
      class="audio_warp"
      controls="controls"
      ref="audio"
      src="./1.mp3"
    ></audio>
    <!-- 播放器核心 -->
    <van-tabbar class="tabbar" v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/boke">歌单</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/kge">歌手</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/my">我的</van-tabbar-item>
    </van-tabbar>

    <!-- 播放列表 -->
    <van-popup
      v-model="musicListShow"
      position="bottom"
      :style="{ height: '30%' }"
    />
    <!-- /播放列表 -->

    <!-- 我的信息弹出层 -->
    <van-popup class="popup_warp" v-model="myMessageShow" position="left">
      <div class="my-info">
        <!-- 我的信息 cell -->
        <!-- 已登录 -->
        <van-cell center v-if="user" to="/my" @click="toMyInfo">
          <div slot="icon">
            <van-image
              class="avatar"
              width="28"
              height="28"
              round
              :src="userInfoDel.avatarUrl"
            />
          </div>
          <div slot="title" class="username">
            <span>{{ userInfoDel.nickname }}</span>
            <van-icon class="name-right" name="arrow" />
          </div>
          <div slot="default">
            <van-icon class="erwei" name="scan" size="24px" />
          </div>
        </van-cell>

        <!-- 未登录 -->
        <van-cell center to="/login" v-else>
          <div slot="icon">
            <!-- <van-image
              class="avatar"
              width="28"
              height="28"
              round
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            /> -->
            <van-icon class="unlogin" name="user-circle-o" size="30px" />
          </div>
          <div slot="title" class="username">
            <!-- <span>fevqa</span> -->
            <span to="/login">立即登录</span>
            <van-icon class="name-right" name="arrow" />
          </div>
          <div slot="default">
            <van-icon class="erwei" name="scan" size="24px" />
          </div>
        </van-cell>

        <!-- /我的信息 cell -->

        <!-- 第一个列表区 -->
        <div class="list_warp">
          <van-cell-group center border class="list_item">
            <van-cell title="我的消息" icon="envelop-o" value="" is-link />
            <van-cell title="云贝中心" icon="bill-o" value="" is-link>
              <div slot="default">
                <van-button class="sign_in" size="mini" round>签到</van-button>
              </div>
            </van-cell>
            <van-cell title="创作者中心" icon="smile-o" value="" is-link />
          </van-cell-group>
        </div>
        <!-- /第一个列表区 -->

        <!-- 第二个列表区 -->
        <div class="list_warp">
          <div class="list_two_title common">音乐服务</div>
          <van-cell-group>
            <van-cell
              title="云村有票"
              icon="comment-circle-o"
              value=""
              is-link
            />
            <van-cell title="商城" icon="shopping-cart-o" value="" is-link>
              <div slot="default">
                <!-- <van-button size="mini">签到</van-button> -->
              </div>
            </van-cell>
            <van-cell title="游戏专区" icon="medal-o" value="" is-link />
            <van-cell title="口袋彩铃" icon="phone-circle-o" value="" is-link />
          </van-cell-group>
        </div>
        <!-- /第二个列表区 -->

        <!-- 第三个列表区 -->
        <div class="list_warp">
          <div class="list_three_title common">其他</div>
          <van-cell-group>
            <van-cell title="设置" icon="setting-o" value="" is-link />
            <van-cell title="夜间模式" icon="closed-eye" value="" is-link>
              <div slot="default">
                <van-switch class="sun_patten" v-model="checked" size="18px" />
                <!-- <van-button size="mini">签到</van-button> -->
              </div>
            </van-cell>
            <van-cell title="定时关闭" icon="underway-o" value="" is-link />
            <van-cell title="个性装扮" icon="location-o" value="" is-link />
            <van-cell
              title="边听边存"
              icon="service-o"
              value="未开启"
              is-link
            />
            <van-cell title="在线听歌免流量" icon="label-o" value="" is-link />
            <van-cell title="音乐黑名单" icon="warn-o" value="未开启" is-link />
            <van-cell title="青少年模式" icon="contact" value="" is-link />
            <van-cell title="音乐闹钟" icon="bullhorn-o" value="" is-link />
          </van-cell-group>
        </div>
        <!-- /第三个列表区 -->

        <!-- 第四个列表区 -->
        <div class="list_warp">
          <!-- <div class="list_three_title common"></div> -->
          <van-cell-group>
            <van-cell title="我的订单" icon="orders-o" value="" is-link />
            <van-cell title="优惠券" icon="cash-on-deliver" value="" is-link>
              <div slot="default"></div>
            </van-cell>
            <van-cell
              title="帮助与反馈"
              icon="comment-circle-o"
              value=""
              is-link
            />
            <van-cell title="分享网易云音乐" icon="share-o" value="" is-link />
            <van-cell title="关于" icon="warning-o" value="" is-link />
          </van-cell-group>
        </div>
        <!-- /第四个列表区 -->

        <!-- 登录退出按钮 -->
        <div class="login_btn_warp">
          <van-button block color="#fe3a3b" @click="unLogin"
            >退出登录/关闭</van-button
          >
        </div>
        <!-- 登录与退出按钮 -->
      </div>
    </van-popup>
    <!-- /我的信息弹出层 -->
  </div>
</template>

<script>
// import { getItem } from '../../utils/storage'
import { mapState } from 'vuex'
import { removeUserInfo, getUserInfoDel } from '../../api/user'

export default {
  name: 'LayoutIndex',
  data() {
    return {
      // 保存获取本地的 token信息
      localToken: '',
      // 控制我的信息显示与隐藏
      myMessageShow: false,
      // 搜索文本
      searchText: '',
      // 控制当前显示的页面
      active: 0,
      // 控制歌曲按钮的播放与停止切换
      audioBtn: false,
      // 控制音乐播放列表
      musicListShow: false,
      // 控制夜间模式变化
      checked: false,
      // 保存用户id信息
      userInfoId: '',
      // 保存用户的登录的信息
      userInfoDel: []
    }
  },
  computed: {
    ...mapState(['user', 'userInfo'])
  },
  created() {
    // this.getLocalToken()
    // this.myMessageInfo()
  },
  mounted() {},
  methods: {
    // 获取登录信息
    async myMessageInfo() {
      if (this.userInfo === null) {
        this.myMessageShow = true
      } else {
        this.userInfodel = this.userInfo.account.id
        // 获取用户信息
        const { data: res } = await getUserInfoDel(this.userInfodel)
        this.userInfoDel = res.profile
        console.log(this.userInfoDel)
        this.myMessageShow = true
      }
    },
    // 获取本地 token
    // getLocalToken() {
    //   this.localToken = getItem('wx-user')
    //   console.log(this.localToken)
    // },
    // 点击左侧按钮事件
    onClickLeft() {},
    // 歌曲的点击与切换
    playaudio() {
      const { audio } = this.$refs
      // console.log(audio)
      // console.log(this.audioBtn)
      // audio.play()
      if (this.audioBtn === false) {
        audio.play()
        this.audioBtn = !this.audioBtn
      } else {
        audio.pause()
        this.audioBtn = !this.audioBtn
      }
    },
    // 退出登录事件
    unLogin() {
      // 清除 token值
      // 业务处理
      // 1. 弹出登录框  提示用户是否确认
      // 2. 用户确认自动退出
      // 3.  清除本地token
      this.$dialog
        .confirm({
          title: '退出提示',
          message: '确认退出登录吗？'
        })
        .then(() => {
          // 确认事件处理
          this.$store.commit('setUser', null)
          this.$store.commit('setUserInfo', null)
          // 调用接口 退出登录
          removeUserInfo()
        })
        .catch(() => {
          // 退出事件处理
        })
    },
    // 跳转业务处理
    toMyInfo() {
      this.myMessageShow = false
    }
  }
}
</script>

<style scoped lang="less">
// .tabbar {
//   background-color: #f5f5f5;
// }
.search-warp {
  padding: 0 20px;
}
.pos {
  position: relative;
  top: 4px;
  color: #2f2f2f;
}
.layout-index {
  position: relative;
  .music_kernel {
    position: fixed;
    bottom: 48px;
    right: 0;
    left: 0;
    .title {
      margin-left: 14px;
      font-size: 16px;
      color: #2d2d2d;
      .music_anthor {
        font-size: 12px;
        color: #666666;
      }
    }
    .music_warp {
      padding: 6px;
      background-color: #2d2d2d;
    }
    .default_warp {
      display: inline-flex;
      .music_list {
        margin-left: 12px;
      }
    }
  }
  .audio_warp {
    display: none;
  }
  .popup_warp {
    z-index: 11;
    width: 80%;
    height: 100%;
    background-color: #f5f5f5;
    .avatar {
      position: relative;
      top: 5px;
    }
    .unlogin {
      position: relative;
      top: 5px;
    }
    .username {
      margin-left: 10px;
      font-size: 16px;
      font-weight: 600;
    }
    .name-right {
      position: relative;
      top: 3px;
      margin-left: 4px;
    }
    .erwei {
      display: flex;
      align-content: center;
      float: right;
    }
    .list_warp {
      padding: 14px;
      border: 1px solid #f5f5f5;
      border-radius: 10px;
      .list_item {
        padding: 4px;
      }
      .sign_in {
        padding: 0 10px;
        position: relative;
        bottom: 5px;
      }
      .common {
        background-color: #fff;
        font-size: 13px;
        color: #999;
        padding: 14px;
      }
      .sun_patten {
        position: relative;
        top: 3px;
      }
    }
    .login_btn_warp {
      padding: 14px;
    }
  }
}
</style>
