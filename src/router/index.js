import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Confirm from'@/components/Confirm'
import Masker from'@/components/Masker'
import Swipe from'@/components/Swipe'
import Wechat from'@/components/Wechat'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'Hello',component: Hello },
    { path: '/confirm', name: 'Confirm', component: Confirm },
    { path: '/masker', name: 'Masker', component: Masker },
    { path: '/swipe', name: 'Swipe', component: Swipe },
    { path: '/wechat', name: 'Wechat', component: Wechat },
  ]
})
