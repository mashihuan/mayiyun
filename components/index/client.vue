<template>
  <my-slot :title="title" :desc="desc" :showBgColor="false" >
    <section class="container py-5">
      <b-row>
        <b-col class="text-center mb-3 wow bounceInDown item"
          v-for="(item, index) of list" :key="index"
          :data-wow-delay="(index * 0.2) + 's'"
          md="4"
        >
          <b-img :src="item.icon" />
          <p class="mt-1">{{item.name}}</p>
        </b-col>
      </b-row>
    </section>
  </my-slot>
</template>

<script>
if (process.browser) { // 在这里根据环境引入wow.js
  var {WOW} = require('wowjs')
}

import MySlot from '@/components/slot/index'

export default {
  components: {
    MySlot
  },
  data() {
    return {
      title: '公司客户',
      desc: '“精于开发，长于数据”蚂蚁云作为大数据时代卓越的技术与服务提供商，我们将不断创新与实践，赋能更多的客户及生态伙伴。',
      list: [
        {
          icon: require('~/static/img/client/client04.png'),
          name: '江苏省公安厅'
        },
        {
          icon: require('~/static/img/client/client04.png'),
          name: '江苏省南京市建邺区政府'
        },
        {
          icon: require('~/static/img/client/client04.png'),
          name: '江苏省南京市溧水区政府'
        },
        {
          icon: require('~/static/img/client/client02.png'),
          name: '江苏省盐业集团'
        },
        {
          icon: require('~/static/img/client/client03.png'),
          name: '江苏苏盐井神股份有限公司'
        },
        {
          icon: require('~/static/img/client/client01.png'),
          name: '南通中天科技集团'
        }
      ]
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
.item {
  img {
    transition: all 0.4s;
  }
}
.item:hover {
  img {
    transform: scale(1.1);
  }
}
</style>
