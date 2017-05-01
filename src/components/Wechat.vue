<template>
    <div>
    </div>
</template>

<script>
import Vue from 'vue'
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)

export default {
  created () {
    console.log(this.$wechat)
  }
}
</script>