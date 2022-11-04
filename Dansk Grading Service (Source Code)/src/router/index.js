import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PSAKort from '../views/PSAKort.vue'
import Opbevaring from '../views/Opbevaring.vue'
import priser from '../views/priser.vue'
import vurdering from '../views/vurdering.vue'
import Blog from '../views/Blog.vue'
import FAQ from '../views/FAQ.vue'
import Kontakt from '../views/Kontakt.vue'
import Login from '../views/Login.vue'
import Opkonto from '../views/Opkonto.vue'
import Shopingcart from '../views/Shopingcart.vue'
import ForgetPass from '../views/ForgetPass.vue'
import PSA from '../views/PSA.vue'
import BGS from '../views/BGS.vue'
import CGC from '../views/CGC.vue'
import BuyPage from '../views/BuyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/PSAKort',
      name: 'PSAKort',
      component: PSAKort,
    },
    {
      path: '/Opbevaring',
      name: 'Opbevaring',
      component: Opbevaring,
    },
    {
      path: '/priser',
      name: 'priser',
      component: priser,
    },
    {
      path: '/vurdering',
      name: 'vurdering',
      component: vurdering,
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ,
    },
    {
      path: '/Kontakt',
      name: 'Kontakt',
      component: Kontakt,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Opkonto',
      name: 'Opkonto',
      component: Opkonto,
    },
    {
      path: '/Shopingcart',
      name: 'Shopingcart',
      component: Shopingcart,
    },
    {
      path: '/ForgetPass',
      name: 'ForgetPass',
      component: ForgetPass,
    },
    {
      path: '/PSA',
      name: 'PSA',
      component: PSA,
    },
    {
      path: '/BGS',
      name: 'BGS',
      component: BGS,
    },
    {
      path: '/CGC',
      name: 'CGC',
      component: CGC,
    },
    {
      path: '/BuyPage',
      name: 'BuyPage',
      component: BuyPage,
    },
  ],
})

export default router
