<template>
  <section class="py-5 wrapper">
    <div class="container">
      <b-row>
        <b-col md="3" order="1" order-md="0" class="mb-4 wow slideInLeft">
          <b-list-group>
            <b-list-group-item
              class="bg-muted"
              v-for="(item, index) of tabList"
              :key="index"
              :active="active == index"
              @click="handleTabClick(index)"
            >{{item}}</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col md="9" order="0" order-md="1" class="">
          <b-card class="mb-3 wow fadeInUp"
            :data-wow-delay="(index * 0.2) + 's'"
            v-for="(item, index) of list"
            :key="index"
          >
            <!-- <b-card-img src="@/assets/img/product/product01.jpg"></b-card-img> -->
            <b-card-title>{{item.title}}</b-card-title>
            <b-card-text class="text-muted">{{item.desc}}</b-card-text>
            <b-button
              variant="outline-info"
              class="d-block ml-auto"
              @click="handleDetail(item.id)"
            >查看详情</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

if (process.browser) { // 在这里根据环境引入wow.js
  var {WOW} = require('wowjs')
}

export default {
  data() {
    return {
      active: null,
      list: [],
      tabList: ['全部', '云计算', '大数据'],
      productList: [
        {id: 1, icon: require('~/static/img/product/product01.jpg'), title: '专有云解决方案', desc: '专有云解决方案依托于阿里云、数梦工场提供的云计算、大数据、中间件和云安全能力，为用户搭建企业级互联网架构。通过提供集计算、存储、网络于一身的IaaS层基础设施服务，云管理平台、数据、安全统一分布式处理平台，满足用户的中、大型专有云场景需求。'},
        {id: 2, icon: require('~/static/img/product/product02.jpg'), title: '混合云解决方案', desc: '江苏蚂蚁云数据技术有限公司混合云解决方案深度融合阿里云，结合自身在政企云计算业务技术沉淀，打造出贯通公共云和专有云的解决方案。从业务视角出发，提供基础架构层、数据服务层、应用层、安全能力等多层次的跨云混合。数据服务混合、应用混合和安全能力混合补齐了业界常见的基础架构混合云方案的短板，为用户业务提供全栈混合云能力。'},
        {id: 3, icon: require('~/static/img/product/product03.jpg'), title: '大数据解决方案', desc: '蚂蚁云大数据解决方案打造了易使用、高性能、低成本、高可靠的解决方案，帮助客户进行大数据运营，挖掘出蕴含在数据当中的价值。底层计算引擎提供海量数据存储和高速计算能力；中层大数据工作台为数据资产的开发、管理、挖掘、服务化提供工具；上层应用通过各种形式发挥数据的价值。'},
        {id: 4, icon: require('~/static/img/product/product04.jpg'), title: '数据共享交换解决方案', desc: '蚂蚁云数据共享交换平台为用户提供了强大部署服务。平台在架构上基于分布式云架构。数据交换平台将分散建设的若干应用信息系统进行整合，通过构建数据共享交换平台，使若干个应用子系统信息/数据能够传输及共享，提高信息资源的利用率，保证分布异构系统之间互联互通，建立中心数据库，完成数据的抽取、集中、加载、展现，构造统一的数据处理和交换。数据共享交换平台帮助政府和企业打破部门间的数据孤岛，适应于大数据时代的数据交换场景。'},
        {id: 5, icon: require('~/static/img/product/product05.jpg'), title: '大数据工作台', desc: '数据治理平台帮助企业更好的管理数据资产，集合IT技术人员、系统运维人员、业务用户共同优化企业数据资产。数据治理覆盖整个数据生命周期：产生、流转、加工、使用、销毁，数据治理平台提供全链路的数据管理功能。'}
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
    ...mapState(['subNavIndex']),
  },
  mounted() {
    this.active = this.subNavIndex
    this.getList()
  },
  methods: {
    // 筛选列表
    getList() {
      switch(Number(this.active)) {
        case 0: this.list = this.productList;
        break;
        case 1: this.list = this.productList.slice(0, 2);
        break;
        case 2: this.list = this.productList.slice(2)
      }
      this.$nextTick(() => {
        if (process.browser) {
          new WOW({}).init()
        }
      })
    },
    // 点击筛选
    handleTabClick(index) {
      this.$store.commit('setSubNavIndex', index)
    },
    // 点击查看详情
    handleDetail(id) {
      this.$router.push(`/product/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.wrapper {
  background: #f2f2f2;
}
.card {
  border: none;
}
::v-deep .list-group-item {
  border-color: transparent;
  border-radius: 0;
}
::v-deep .list-group-item.active {
  background: $theme-color;
}
::v-deep .list-group-item:hover {
  cursor: pointer;
}
</style>
