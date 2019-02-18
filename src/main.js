import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 进度条
import 'nprogress/nprogress.css'
// 动画
import 'animate.css'
// 全局样式
import '_style/global/index.scss'
// 错误信息提示
import Message from 'vue-m-message'
// 弹窗
import JModal from '_c/modal'
// 页码信息
import PAGE_API from '@/apis/pageApi';

Vue.config.productionTip = false

Vue.prototype.$PAGE_API = PAGE_API
Vue.use(Message, {name: 'msg'}) 
Vue.use(JModal)



window.App = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
