<template>
    <div>
        <group>
            <x-switch :title="$t('Toggle')" v-model="show"></x-switch>
        </group>
        <div v-transfer-dom>
            <confirm v-model="show"
                     :title="$t('confirm deleting the item')"
                     @on-cancel="onCancel"
                     @on-confirm="onConfirm"
                     @on-show="onShow"
                     @on-hide="onHide">
                <p style="text-align:center;">{{ $t('Are you sure?') }}</p>
            </confirm>
        </div>
        <br>
        <div style="padding:15px;">
            <x-button @click.native="showPlugin" type="primary">{{ $t('Show') }}</x-button>
        </div>
        <div style="padding:15px;">
            <x-button @click.native="showPlugin2" type="primary">{{ $t('Plugin usage') }}</x-button>
        </div>
    </div>
</template>

<i18n>
    Toggle: zh-CN: 显示
    Are you sure?: zh-CN: 确定咩？
    confirm deleting the item: zh-CN: 操作提示
    Plugin usage: zh-CN: 插件形式调用
    Show: zh-CN: 显示
</i18n>

<script>
import Vue from 'vue'
import { Confirm, Group, XSwitch, XButton, TransferDomDirective as TransferDom } from 'vux'
import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)

export default {
  directives: {
    TransferDom
  },
  components: {
    Confirm,
    Group,
    XSwitch,
    XButton
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    onCancel () {
      console.log('on cancel')
    },
    onConfirm () {
      console.log('on confirm')
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    showPlugin () {
      this.$vux.confirm.show({
        title: 'Title',
        content: 'Content',
        onShow () {
          console.log('plugin show')
        },
        onHide () {
          console.log('plugin hide')
        },
        onCancel () {
          console.log('plugin cancel')
        },
        onConfirm () {
          console.log('plugin confirm')
        }
      })
    },
    showPlugin2 () {
      this.showPlugin()
    }
  }
}
</script>