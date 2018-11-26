
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/assets/css/style.css'     //  引入初始样式
import '@/assets/css/iconfont.css'
import 'assets/css/reset.css'     //  引入初始样式


import App from './App'
import router from './router'


import 'lib-flexible/flexible'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/index'

//过滤器
import * as filters from './api/filter.js'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
