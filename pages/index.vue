<template>
  <div>
    <Product />
    <Business />
    <About />
    <Partner />
    <Client />
  </div>
</template>

<script>
import Product from '@/components/index/product'
import Business from '@/components/index/business'
import About from '@/components/index/about'
import Partner from '@/components/index/partner'
import Client from '@/components/index/client'
if (process.browser) { // 在这里根据环境引入wow.js
  var {WOW} = require('wowjs')
}

export default {
  components: {
    Product,
    Business,
    About,
    Client,
    Partner
  },
  mounted() {
    if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
