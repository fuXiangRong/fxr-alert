<template>
  <div class="fxr-x-dialog" @touchmove="onTouchMove">
    <transition name="vux-mask">
      <div class="weui-mask" @click="hideOnBlur && (currentValue = false)" v-show="currentValue"></div>
    </transition>
    <transition :name="dialogTransition">
      <div class="weui-dialog" v-show="currentValue" >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    hideOnBlur: Boolean,
    scroll: {
      type: Boolean,
      default: true
    }
  },
  created () {
    console.log('hideOnBlur:' + this.hideOnBlur);
    if (typeof this.value !== 'undefined') {
      this.currentValue = this.value
    }
  },
  watch: {
    value: {
      handler: function (val) {
        console.log('val:' + val);
        this.currentValue = val
      },
      immediate: true
    },
    currentValue (val) {
      this.$emit(val ? 'on-show' : 'on-hide')
      this.$emit('input', val)
    }
  },
  data () {
    return {
      currentValue: false
    }
  },
  methods: {
    onTouchMove: function (event) {
      !this.scroll && event.preventDefault()
    }
  }
}
</script>

<style lang="scss">
  @import '../../scss/weui_tips/transition';
  @import '../../scss/weui_tips/weui_mask';
  @import '../../scss/weui_tips/weui_dialog';
</style>
