<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
  export default {
    name: 'app',
    created(){
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
    }
  }
</script>

<style>
</style>
