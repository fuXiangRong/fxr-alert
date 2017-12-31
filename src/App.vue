<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <button type="button" name="button" @click="a">点击</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created(){

    },
    methods: {
      a(){
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
  }
</script>

<style>
  button{
    width: 80%;
    margin: 20px auto;
    display: block;
    height: 44px;
    border-radius: 5px;
    background: red;
    color: #fff;
    font-size: 16px;
    border: none
  }
</style>
