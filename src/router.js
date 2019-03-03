import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import LoginAndRegister from './views/LoginAndRegister.vue'
import GoodsMall from './views/GoodsMall.vue'
import Promotion from './views/page/Promotion.vue'
import News from './views/page/News.vue'
import Storefront from './views/page/Storefront.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/LoginAndRegister',
      name: 'loginAndRegister',
      component: LoginAndRegister
    },
    {
      path: '/GoodsMall',
      name: 'goodsMall',
      component: GoodsMall
    },
    {
      path: '/Promotion',
      name: 'promotion',
      component: Promotion
    },
    {
      path: '/News',
      name: 'news',
      component: News
    },
    {
      path: '/Storefront',
      name: 'storefront',
      component: Storefront
    }
  ]
})
