<template>
  <div class="login-index">
    <!-- 顶部导航 -->
    <van-nav-bar
      class="top_nav"
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- /顶部导航 -->

    <!-- 登录输入框 -->
    <van-form
      @submit="onLogin"
      @failed="onFailed"
      :show-error-message="false"
      :show-error="false"
    >
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :show-error-message="false"
        :rules="fromRules.username"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="fromRules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <!-- /登录输入框 -->
    <!-- 注册跳转 -->
    <van-cell center to="/register">
      <div slot="title">
        <span>没有账号，</span>
        <a href="javascript:;">注册</a>
      </div>
    </van-cell>
  </div>
</template>

<script>
import { getUserInfo } from '../../api/user'
// import { getItem } from '../../utils/storage'
// import { randomString } from '../../utils/token'

export default {
  name: 'LoginIndex',
  data() {
    return {
      // 用户名
      username: '15635748705',
      // 密码
      password: 'wt5211314.',
      // 账号密码校验规则
      fromRules: {
        username: [
          { required: true, message: '请输入手机号' }
          // { pattern: /^1[3|5|7|9]\d{9}$/, message: '手机号格式错误' }
        ],
        password: [
          { required: true, message: '请输入密码' }
          // { pattern: /^\d{6}$/, message: '密码格式错误' }
        ]
      },
      // 登录成功码
      successToken: '',
      // 用户信息
      userInfo: []
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 返回按钮事件
    onClickLeft() {
      this.$router.back()
    },
    // 验证登录成功事件
    async onLogin() {
      this.$toast.loading({
        message: '登录中',
        forbidClick: true
      })
      console.log('登录')
      // 发送登录请求
      const { data: res } = await getUserInfo(this.username, this.password)
      console.log(res)
      if (res.code === 200) {
        this.$toast.success({
          message: '登录成功'
        })
        this.successToken = res.token
        this.$router.back()
      } else {
        this.$toast.fail({
          message: '账号或密码错误，请重试'
        })
      }
      this.userInfo = res
      console.log(this.userInfo)
      // 保存 用户信息 userinfo 到 vuex中
      this.$store.commit('setUserInfo', this.userInfo)
      console.log(this.successToken)
      // 保存token到vuex
      this.$store.commit('setUser', this.successToken)
    },
    // 登录失败
    onFailed(err) {
      console.log(err)
      if (err.errors[0]) {
        this.$toast({
          message: err.errors[0].message,
          position: 'top'
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-index {
  background-color: #f5f5f5;
  .top_nav {
    background-color: #dd2d1e;
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
    /deep/ .van-icon {
      color: #fff;
    }
    /deep/ .van-nav-bar__text {
      color: #fff;
    }
  }
}
</style>
