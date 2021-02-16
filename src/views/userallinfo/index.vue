<template>
  <div class="userallinfo-index">
    <!-- 顶部导航栏 -->
    <van-nav-bar
      class="nav-top"
      left-text="我的资料"
      right-text="完成"
      center
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- /顶部导航栏 -->
    <!-- 基本信息页面 -->
    <van-cell-group class="info_warp">
      <!-- 头像 -->
      <van-cell>
        <div slot="title">头像</div>
        <div slot="default">
          <van-image
            width="30"
            height="30"
            fit="cover"
            round
            :src="userInfo.profile.avatarUrl"
          />
        </div>
      </van-cell>

      <!-- 昵称 -->
      <van-cell>
        <div slot="title">
          昵称
        </div>
        <div slot="default" @click="isnickNameShow = true">
          <span>{{ userInfo.profile.nickname }}</span>
        </div>
      </van-cell>

      <!-- 性别 -->
      <van-cell>
        <div slot="title">
          性别
        </div>
        <div slot="default">
          <span @click="isGenderShow = true">{{ sex }}</span>
        </div>
      </van-cell>

      <!-- 二维码 -->
      <van-cell>
        <div slot="title">
          二维码
        </div>
        <div slot="default">
          <van-icon name="qr" size="18" />
        </div>
      </van-cell>
    </van-cell-group>
    <!-- /基本信息页面 -->

    <!-- 附加信息页面 -->
    <van-cell-group class="info_warp">
      <van-cell>
        <div slot="title">
          生日
        </div>
        <div slot="default">
          <span @click="birthdayShow = true">{{ birthday }}</span>
          <!-- <van-icon name="arrow" /> -->
        </div>
      </van-cell>
      <van-cell @click="locateAddress">
        <div slot="title">
          地区
        </div>
        <div slot="default">
          <span>{{ cascaderPValue + ' ' + cascaderCValue }}</span>
        </div>
      </van-cell>
      <van-cell>
        <div slot="title">
          大学
        </div>
        <div slot="default">
          <span>未填写</span>
        </div>
      </van-cell>
      <van-cell>
        <div slot="title">
          简介
        </div>
        <div slot="default">
          <span>{{ signature }}</span>
        </div>
      </van-cell>
    </van-cell-group>
    <!-- /附加信息页面 -->

    <!-- 个人主页隐私设置 -->
    <van-cell-group class="info_warp">
      <van-cell>
        <div slot="title">
          个人主页隐私设置
        </div>
      </van-cell>
    </van-cell-group>
    <!-- /个人主页隐私设置 -->

    <!-- 账号与绑定设置 -->
    <van-cell-group class="info_warp">
      <van-cell>
        <div slot="title">
          账号与绑定设置
        </div>
      </van-cell>
    </van-cell-group>
    <!-- /账号与绑定设置 -->

    <!-- 展示生日弹框 -->
    <van-popup
      v-model="birthdayShow"
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="onBirthdayConfirm"
        @cancel="birthdayShow = false"
      />
    </van-popup>
    <!-- /展示生日弹框 -->

    <!-- 修改地区弹出框 -->
    <van-popup
      v-model="isLocateShow"
      position="bottom"
      :style="{ height: '30%' }"
      @close="onLocateFinish"
    >
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        :field-names="fieldNames"
        @finish="onLocateFinish"
        active-color="#1989fa"
        @close="isLocateShow = false"
      />
    </van-popup>
    <!-- 修改地区弹出框 -->

    <!-- 修改性别弹出框 -->
    <van-popup
      v-model="isGenderShow"
      position="bottom"
      :style="{ height: '30%' }"
      @close="isGenderClose"
    >
      <van-picker
        title="性别"
        show-toolbar
        :columns="gender"
        @confirm="onGenderConfirm"
        @cancel="onGenderCancel"
      />
    </van-popup>
    <!-- /修改性别弹出框 -->

    <!-- 修改昵称弹出框 -->
    <van-popup
      v-model="isnickNameShow"
      position="bottom"
      closeable
      :style="{ height: '100%' }"
      @close="isNickNameClose"
    >
      <van-cell-group>
        <van-field
          class="nick_name"
          v-model="userNickName"
          label="昵称"
          placeholder="请输入昵称"
          :border="false"
        >
          <template #button>
            <van-button size="small" type="primary" @click="onreplyNickName"
              >完成</van-button
            >
          </template>
        </van-field>
      </van-cell-group>
    </van-popup>
    <!-- /修改昵称弹出框 -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { fdate } from '../../utils/fdate.js'
// import { address } from '../../utils/address.js'
import dayjs from 'dayjs'
import { replyUserInfo } from '../../api/user'

export default {
  name: 'UserAllInfoIndex',
  data() {
    return {
      // 用户性别
      sex: '',
      sexid: '',
      gender: ['保密', '男', '女'],
      // 展示用户姓名弹框
      isnickNameShow: false,
      // 保存用户姓名
      userNickName: '',
      // 生日
      birthday: '',
      // 地区的显示与隐藏
      isLocateShow: false,
      // 地区 省编号
      locateP: '',
      // 地区市标号
      locateC: '',
      // 地区
      cascaderValue: '',
      cascaderPValue: '',
      cascaderCValue: '',
      // 描述
      description: '',
      fieldNames: {
        text: 'text',
        value: 'value',
        children: 'children'
      },
      options: [
        {
          text: '山西省',
          value: '140000',
          children: [
            { text: '太原市', value: '140100' },
            { text: '大同市', value: '140200' },
            { text: '阳泉市', value: '140300' },
            { text: '长治市', value: '140400' },
            { text: '晋城市', value: '140500' },
            { text: '朔州市', value: '140600' },
            { text: '晋中市', value: '140700' },
            { text: '运城市', value: '140800' },
            { text: '忻州市', value: '140900' },
            { text: '临汾市', value: '141000' },
            { text: '吕梁市', value: '141100' }
          ]
        }
      ],
      // 展示生弹框
      birthdayShow: false,
      // 生日
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      // 性别
      isGenderShow: false
    }
  },
  computed: {
    ...mapState(['userInfo'])
    // onAddress(city) {
    //   for (var item in this.options.children) {
    //     if (city === item.value) {
    //       const address = item
    //       console.log(address)
    //     }
    //   }
    //   return item
    // }
  },
  created() {
    this.loadingGender()
  },
  mounted() {},
  methods: {
    // 初始化
    loadingGender() {
      // console.log(fdate(2209017600000))
      console.log(typeof this.userInfo.profile.gender)
      this.sex = this.userInfo.profile.gender
      if (this.sex === 0) {
        this.sex = '保密'
      } else if (this.sex === 1) {
        this.sex = '男'
      } else if (this.sex === 2) {
        this.sex = '女'
      }
      if (this.userInfo.profile.birthday < 0) {
        this.birthday = '未设置'
      } else {
        this.birthday = fdate(this.userInfo.profile.birthday)
      }
      if (this.userInfo.profile.city === 140100) {
        this.cascaderPValue = '山西省'
        this.cascaderCValue = '太原市'
      }
      if (this.userInfo.profile.signature === '') {
        this.signature = '未填写简介'
      } else {
        this.signature = this.userInfo.profile.signature
      }
    },
    // 初始化函数
    start() {},
    // 返回 退出事件
    onClickLeft() {
      this.$router.back()
      console.log('返回')
    },
    // 生日函数
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      }
      return val
    },
    onBirthdayConfirm(value) {
      console.log(value)
      // console.log(date)
      const date = dayjs(value).format('YYYY-MM-DD')
      // console.log(this.formatter())
      console.log(date)
      this.birthday = date
      this.birthdayShow = false
    },
    async locateAddress() {
      this.isLocateShow = true
    },
    // 监听事件的改变
    onLocateFinish(value) {
      // console.log(value, selectedOptions, tabIndex)
      // 将省编号赋值给 locateP
      // console.log(value.selectedOptions[0].value)
      // console.log(value.selectedOptions[1].value)
      this.locateP = value.selectedOptions[0].value
      // 将市编号赋值给 locateC
      this.locateC = value.selectedOptions[1].value
      console.log(this.locateP)
      console.log(this.locateC)
      this.cascaderPValue = value.selectedOptions[0].text
      this.cascaderCValue = value.selectedOptions[1].text
      console.log(this.cascaderValue)
      // 隐藏弹出框
      this.isLocateShow = false
    },
    // 性别事件
    isGenderClose() {},
    // 确认
    onGenderConfirm(value, index) {
      console.log(value + ' ' + index)
      this.sex = value
      this.sexid = index
      this.isGenderShow = false
    },
    // 取消
    onGenderCancel(value, index) {
      this.isGenderShow = false
    },
    // 监听性别关闭事件
    isNickNameClose() {},
    // 修改昵称完成
    onreplyNickName() {
      // 将文本中的内容赋值给 资料中的 nickname
      this.userInfo.profile.nickname = this.userNickName
      // 发送修改请求
      // 关闭弹窗
      this.isnickNameShow = false
    },
    // 保存事件
    async onClickRight() {
      // 发送请求修改参数
      const res = await replyUserInfo(
        this.sexid,
        this.birthday,
        this.userNickName,
        this.locateP,
        this.locateC,
        this.description
      )
      console.log(res)
      console.log('完成')
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
.userallinfo-index {
  background-color: #f5f5f5;
  .nav-top {
    margin-bottom: 10px;
  }
  .info_warp {
    margin-bottom: 10px;
  }
  .nick_name {
    margin-top: 50px;
  }
}
</style>
