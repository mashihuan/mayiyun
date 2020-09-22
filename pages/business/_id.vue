<template>
  <section class="pb-5">
    <div class="border-bottom mb-5">
      <div class="container d-flex justify-content-between align-items-center">
        <h4 class="py-3">{{info.title}}</h4>
        <div class="d-none d-md-block">
          <b-breadcrumb class="bg-white m-0 p-0">
            <b-breadcrumb-item to="/">网站首页</b-breadcrumb-item>
            <b-breadcrumb-item to="/business">行业解决方案</b-breadcrumb-item>
            <b-breadcrumb-item active>{{info.title}}</b-breadcrumb-item>
          </b-breadcrumb>
        </div>
      </div>
    </div>
    <div class="container">
      <b-row align-h="center" class="mb-5">
        <b-col md="8" class="text-center"><b-img :src="info.picture" fluid alt="" /></b-col>
      </b-row>
      <article class="detail mb-5 text-justify" v-html="info.desc"></article>
    </div>
  </section>
</template>

<script>
if (process.browser) { // 在这里根据环境引入wow.js
  var {WOW} = require('wowjs')
}

import { business } from '@/utils/mock.js'

export default {
  computed: {
    info() {
      const index = this.$route.params.id
      return business[index - 1]
    }
  },
  mounted() {
    if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.title {
  font-size: 16px;
  font-weight: bold;
  color: #2a333c;
}
.detail {
  font-size: 16px;
  line-height: 2;
  color: #2a333c;
}
.breadcrumb a {
  color: $theme-color;
}
</style>
