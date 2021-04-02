import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index';
Vue.config.productionTip = false
import MetaInfo from 'vue-meta-info';
Vue.use(MetaInfo)
import './style/common.css'
import './assets/styles/reset.css'
import './assets/styles/style.less'
//导航守卫
import './common/fuards/index'

new Vue({
  router,
  store,
  render: h => h(App),
  mounted(){
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
