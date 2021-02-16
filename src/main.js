import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 加载图标组件
import './styles/icon.less'

// 加载 自动设置 rem
import 'amfe-flexible'
// 引入全局样式
import './styles/index.less'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
