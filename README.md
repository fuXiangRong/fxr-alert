<p align="center">
  <a href="http://www.vuevuex.com/">
    <img src="http://www.vuevuex.com/static/img/avatar.67aebcb.jpg">
  </a>
</p>

## 使用方法

+ npm i vue-fxr-alert -S
+ 或 cnpm i vue-fxr-alert -S
+ import vueFxrAlert from 'vue-fxr-alert'
+ Vue.use(vueFxrAlert);
``` bash

<script>
  export default {
    name: 'app',
    created(){
      //显示
      this.fxrAlert.show({
        title: '友情提示',
        content: '用户名不正确',
        onShow () {
          console.log('显示')
        },
        onHide () {
          console.log('确定按钮点击回调')
        }
      })

      // 隐藏
      this.fxrAlert.hide()
    }
  }
</script>

```
