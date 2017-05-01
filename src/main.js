// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router  from './router/index'

import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
})
store.registerModule('vux', { // 名字自己定义
    state: {
        isLoading: false
    },
    mutations: {
        updateLoadingStatus (state, payload) {
            state.isLoading = payload.isLoading
        }
    }
})

router.beforeEach(function (to, from, next) {
    store.commit('updateLoadingStatus', {isLoading: true})
    next()
})

router.afterEach(function (to) {
    store.commit('updateLoadingStatus', {isLoading: false})
})

Vue.use(vuexI18n.plugin, store)

FastClick.attach(document.body)

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
