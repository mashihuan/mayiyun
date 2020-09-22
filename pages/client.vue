<template>
  <section class="container py-5">
    <b-row v-if="subNavIndex == 0">
      <b-col class="text-center mb-3 wow bounceInDown"
        v-for="(item, index) of list" :key="index"
        :data-wow-delay="(index * 0.2) + 's'"
        md="4"
      >
        <b-img :src="item.icon" />
        <p>{{item.name}}</p>
      </b-col>
    </b-row>

    <b-row v-if="subNavIndex == 1">
      <b-col class="text-center mb-3 wow bounceInDown"
        v-for="(item, index) of list2" :key="index"
        :data-wow-delay="(index * 0.2) + 's'"
        md="4"
      >
        <b-img :src="item.icon" />
        <p>{{item.name}}</p>
      </b-col>
    </b-row>

    <b-row v-if="subNavIndex == 2">
      <b-col class="text-center mb-3 wow bounceInDown"
        v-for="(item, index) of list3" :key="index"
        :data-wow-delay="(index * 0.2) + 's'"
        md="4"
      >
        <b-img :src="item.icon" />
        <p>{{item.name}}</p>
      </b-col>
    </b-row>
  </section>
</template>

<script>
if (process.browser) { // 在这里根据环境引入wow.js
  var {WOW} = require('wowjs')
}

import { mapState } from 'vuex'

export default {
  data() {
    return {
      active: 0,
      list: [
        {
          icon: require('~/static/img/client/client01.png'),
          name: '南通中天科技集团'
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
          icon: require('~/static/img/client/client04.png'),
          name: '江苏省南京市建邺区政府'
        },
        {
          icon: require('~/static/img/client/client04.png'),
          name: '江苏省南京市溧水区政府'
        },
        {
          icon: require('~/static/img/client/client04.png'),
          name: '江苏省公安厅'
        }
      ],
      list2: [
        {
          icon: require('~/static/img/client/client01.png'),
          name: '南通中天科技集团'
        },
        {
          icon: require('~/static/img/client/client02.png'),
          name: '江苏省盐业集团'
        },
        {
          icon: require('~/static/img/client/client03.png'),
          name: '江苏苏盐井神股份有限公司'
        }
      ],
      list3: [
        {
          icon: require('~/static/img/client/client04.png'),
          name: '江苏省南京市建邺区政府'
        },
        {
          icon: require('~/static/img/client/client04.png'),
          name: '江苏省南京市溧水区政府'
        },
        {
          icon: require('~/static/img/client/client04.png'),
          name: '江苏省公安厅'
        }
      ]
    }
  },
  watch: {
    subNavIndex(newVal, oldVal) {
      this.active = newVal
      this.getList()
    }
  },
  computed: {
    ...mapState(['subNavIndex'])
  },
  mounted() {
    if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init()
    }
    this.active = this.subNavIndex
    this.getList()
  },
  methods: {
    getList() {
      switch(Number(this.active)) {
        case 0: this.list2 = this.list;
        break;
        case 1: this.list2 = this.list.slice(0, 3);
        break;
        case 2: this.list2 = this.list.slice(3)
      }
    }
  }
}
</script>

<style>

</style>
