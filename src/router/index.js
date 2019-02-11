import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import NProgress from 'nprogress'

Vue.use(Router)
const router = new Router({
    // linkActiveClass:'active',
    // linkExactActiveClass:'exact-active',
    routes,
    mode: 'history'
})

router.beforeEach(async (to, from, next) => {
    next()
})

router.afterEach(() => {
    window.scrollTo(0, 0)
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
    /* must call `next` */
})
router.afterEach(() => {
    NProgress.done();
    //NProgress.remove();
})

export default router