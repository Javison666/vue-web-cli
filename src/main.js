import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'nprogress/nprogress.css'

import 'animate.css'
import '_style/global/index.scss'

import Message from 'vue-m-message'
import JModal from '_c/modal'

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
