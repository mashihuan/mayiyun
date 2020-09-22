<template>
  <div>
    <my-header />
    <carousel class="d-none d-md-block d-lg-block d-xl-block"
      style="height: 0; padding-bottom: 31.2%"
      size="big"
    />
    <carousel class="d-block d-md-none d-lg-none d-xl-none"
      style="height: 0; padding-bottom: 120%"
      size="small"
    />
    <nuxt />
    <concat />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '@/components/header/index'
import Carousel from '@/components/index/carousel'
import Concat from '@/components/index/concat'
import MyFooter from '@/components/footer/index'
if (process.browser) { // 在这里根据环境引入wow.js
  var {WOW} = require('wowjs')
}

export default {
  components: {
    MyHeader,
    Carousel,
    Concat,
    MyFooter
  },
  mounted() {
    if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init()
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/normalize.css';
@import '@/assets/styles/reset.scss';
@import '@/assets/styles/variables.scss';

html {
  font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #333;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
