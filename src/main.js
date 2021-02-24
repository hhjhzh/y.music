import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import fastclick from 'fastclick'
import './assets/css/base.scss'
import VueLazyload from 'vue-lazyload'
import store from './store/index'

Vue.use(VueLazyload, {
  loading: require('./assets/images/loading.gif')// 占位图片，图片还在加载中，显示这张图片

})
Vue.config.productionTip = false

fastclick.attach(document.body)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
