<template>
  <my-slot :title="title" :desc="desc">
    <b-row class="mx-0">
      <b-col lg="4" md="6" sm="12"
        v-for="(item, ind) of productList"
        :key="ind"
        class="wow fadeInDown"
        :data-wow-delay="(ind * 0.2) + 's'"
      >
        <!-- 卡片 -->
        <b-card class="overflow-hidden my-2">
          <b-row no-gutters>
            <b-col cols="4" class="px-2">
              <b-card-img :src="item.icon" class="rounded-circle"></b-card-img>
            </b-col>
            <b-col cols="8">
              <b-card-body class="p-2">
                <b-card-title class="text-truncate">{{item.title}}</b-card-title>
                <b-card-text class="card-body-text text-muted text-justify">{{item.desc}}</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
          <!-- 蒙版 -->
          <div class="mask">
            <b-button variant="outline-info"
              class="mx-auto d-block my-btn"
              @click="$router.push('/product/'+item.id)"
            >了解更多</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </my-slot>
</template>

<script>
import MySlot from '@/components/slot/index'

export default {
  components: {
    MySlot
  },
  data() {
    return {
      title: '产品&解决方案',
      desc: '蚂蚁云致力于帮助客户从信息化到数字化的转型，和政企客户一起构建、优化IT基础架构，同时聚焦云计算、大数据领域，整合上下游厂商资源，集成业界领先的技术、产品和解决方案',
      productList: [
        {id: 1, icon: require('~/static/img/product/product01.jpg'), title: '专有云解决方案', desc: '专有云解决方案依托于阿里云、数梦工场提供的云计算、大数据、中间件和云安全能力，为用户搭建企业级互联网架构。通过提供集计算、存储、网络于一身的IaaS层基础设施服务，云管理平台、数据、安全统一分布式处理平台，满足用户的中、大型专有云场景需求。'},
        {id: 2, icon: require('~/static/img/product/product02.jpg'), title: '混合云解决方案', desc: '江苏蚂蚁云数据技术有限公司混合云解决方案深度融合阿里云，结合自身在政企云计算业务技术沉淀，打造出贯通公共云和专有云的解决方案。从业务视角出发，提供基础架构层、数据服务层、应用层、安全能力等多层次的跨云混合。数据服务混合、应用混合和安全能力混合补齐了业界常见的基础架构混合云方案的短板，为用户业务提供全栈混合云能力。'},
        {id: 3, icon: require('~/static/img/product/product03.jpg'), title: '大数据解决方案', desc: '蚂蚁云大数据解决方案打造了易使用、高性能、低成本、高可靠的解决方案，帮助客户进行大数据运营，挖掘出蕴含在数据当中的价值。底层计算引擎提供海量数据存储和高速计算能力；中层大数据工作台为数据资产的开发、管理、挖掘、服务化提供工具；上层应用通过各种形式发挥数据的价值'},
        {id: 4, icon: require('~/static/img/product/product04.jpg'), title: '数据共享交换解决方案', desc: '蚂蚁云数据共享交换平台为用户提供了强大部署服务。平台在架构上基于分布式云架构。数据交换平台将分散建设的若干应用信息系统进行整合，通过构建数据共享交换平台，使若干个应用子系统信息/数据能够传输及共享，提高信息资源的利用率，保证分布异构系统之间互联互通，建立中心数据库，完成数据的抽取、集中、加载、展现，构造统一的数据处理和交换。数据共享交换平台帮助政府和企业打破部门间的数据孤岛，适应于大数据时代的数据交换场景。'},
        {id: 5, icon: require('~/static/img/product/product05.jpg'), title: '大数据工作台', desc: '数据治理平台帮助企业更好的管理数据资产，集合IT技术人员、系统运维人员、业务用户共同优化企业数据资产。数据治理覆盖整个数据生命周期：产生、流转、加工、使用、销毁，数据治理平台提供全链路的数据管理功能。'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.card {
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    align-items: center;
    // justify-content: center;
    text-align: center;
    background: rgba(0, 0, 0, 0.8);
  }
}
.card:hover {
  box-shadow: 0 0 10px #ccc;
  .mask {
    display: flex !important;
  }
}
.card-body-text {
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
