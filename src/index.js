import AlertComponent from './components/alert'
import { mergeOptions } from './plugin_helper'

let $vm

const plugin = {
  install (Vue) {
    if (!$vm) {
      const Alert = Vue.extend(AlertComponent)
      $vm = new Alert({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const alert = {
      show (options) {
        if (typeof options === 'object') {
          mergeOptions($vm, options)
        } else if (typeof options === 'string') {
          $vm.content = options
        }
        this.watcher && this.watcher()
        this.watcher = $vm.$watch('showValue', (val) => {
          val && options.onShow && options.onShow($vm)
          if (val === false && options.onHide) {
            options.onHide($vm)
            this.watcher && this.watcher()
          }
        })
        $vm.showValue = true
      },
      hide () {
        $vm.showValue = false
        this.watcher && this.watcher()
        this.watcher = null
      }
    }

    Vue.fxrAlert = alert

    Vue.mixin({
      created: function () {
        this.fxrAlert = Vue.fxrAlert
      }
    })
  }
}

export default plugin
export const install = plugin.install
