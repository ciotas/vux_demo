<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import Vue from 'vue'
import { Loading } from 'vux'
import { mapState } from 'vuex'
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)


export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  },
  mounted(){
    //console.log(this.$http)
     this.$http.get('http://laravel.dev/api/tasks').then((response) => {
          console.log(response.data)
      })
  },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
