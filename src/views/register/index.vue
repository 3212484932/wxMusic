<template>
  <div class="register-index">
    <!-- 顶部导航 -->
    <van-nav-bar
      class="top_nav"
      title="注册"
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
        v-model="uname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :show-error-message="false"
        :rules="fromRules.uname"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="fromRules.password"
      />
      <van-field
        v-model="code"
        name="验证码"
        label="验证码"
        placeholder="验证码"
        :show-error-message="false"
        :rules="fromRules.code"
      >
        <template #button>
          <van-count-down
            :time="istime"
            format="ss s"
            v-if="isCountDownShow"
            @finish="isCountDownShow = false"
          />
          <van-button
            size="small"
            type="primary"
            v-else
            @click.prevent="onSendCode"
            :loading="isSendSmsLoading"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <!-- /登录输入框 -->
    <!-- 注册跳转
    <van-cell center to="/register">
      <div slot="title">
        <span>没有账号，</span>
        <a href="#">注册</a>
      </div>
    </van-cell> -->
  </div>
</template>

<script>
import { registerUser, sendPhoneCode, checkPhoneCode } from '../../api/user'

export default {
  name: 'RegisterIndex',
  data() {
    return {
      // 用户名
      username: '',
      // 密码
      password: '',
      // 昵称
      uname: '',
      // 验证码
      code: '',
      // 账号密码校验规则
      fromRules: {
        username: [
          { required: true, message: '请输入手机号' }
          // { pattern: /^1[3|5|7|9]\d{9}$/, message: '手机号格式错误' }
        ],
        password: [
          { required: true, message: '请输入密码' }
          // { pattern: /^\d{6}$/, message: '密码格式错误' }
        ],
        uname: [{ required: true, message: '请输入昵称' }],
        code: [{ required: true, message: '请输入验证码' }]
      },
      // 倒计时时间
      istime: 60 * 1000,
      // 开始计时按钮
      isCountDownShow: false,
      // 发送成功后 处于加载中状态
      isSendSmsLoading: false,
      // 保存用户注册成功的信息
      userAllInfo: []
    }
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    // 发送验证码
    async onSendCode() {
      // 业务处理
      // 1. 禁用按钮 倒计时
      this.isCountDownShow = true
      this.isSendSmsLoading = true
      // 2. 发送请求
      const res = await sendPhoneCode(this.username)
      console.log(res)
      // 3. 倒计时结束显示按钮
      this.isSendSmsLoading = false
      this.isCountDownShow = false
    },
    async onLogin() {
      this.$toast.loading({
        message: '注册中',
        forbidClick: true
      })
      // 检验手机号是否被注册
      const checkPhone = await checkPhoneCode(this.username)
      console.log(checkPhone)
      if (checkPhone.exist === 1) {
        this.$toast.fail({
          message: '手机号已注册，请登录'
        })
        return
      }
      // 发请求验证
      const res = await registerUser(
        this.username,
        this.password,
        this.code,
        this.uname
      )
      console.log(res)
      this.userAllInfo = res.data
      this.$toast.success({
        message: '注册成功'
      })
      // 路由跳转回登录页
      this.$router.back()
    },
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
.register-index {
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
