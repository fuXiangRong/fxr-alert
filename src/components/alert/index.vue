<template>
  <div class="fxr-alert">
    <x-dialog
    v-model="showValue"
    :dialog-transition="dialogTransition"
    :hideOnBlur="hideOnBlur"
    @on-hide="$emit('on-hide')"
    @on-show="$emit('on-show')">
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title">{{title}}</strong>
      </div>
      <div class="weui-dialog__bd">
        <slot>
          <div v-html="content"></div>
        </slot>
      </div>
      <div class="weui-dialog__ft">
        <a href="javascript:;"
        class="weui-dialog__btn weui-dialog__btn_primary"
        @click="_onHide">确定</a>
      </div>
    </x-dialog>
  </div>
</template>

<script>
import XDialog from '../x-dialog'

export default {
  components: {
    XDialog
  },
  created () {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value
    }
  },
  props: {
    value: Boolean,
    title: String,
    content: String,
    buttonText: String,
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    }
  },
  data () {
    return {
      showValue: false,
      hideOnBlur: true
    }
  },
  methods: {
    _onHide () {
      this.showValue = false
    }
  },
  watch: {
    value (val) {
      this.showValue = val
    },
    showValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss">
  @import '../../scss/weui_tips/transition';
  @import '../../scss/weui_tips/weui_mask';
  @import '../../scss/weui_tips/weui_dialog';
</style>
