<template>
  <section class="container">
    <b-row class="mx-0">
      <b-col lg="4" md="12" sm="12" class="wow slideInLeft">
        <b-img fluid :src="require('~/static/img/about/about01.jpg')"></b-img>
      </b-col>
      <b-col lg="8" md="12" sm="12" class="wow slideInRight">
        <h3 class="title mb-0">关于我们</h3>
        <small class="sub-title">about us</small>
        <p class="desc text-muted mt-3">让您更全面的了解我们</p>
        <p class="content text-justify mt-5"><span class="first-letter">江</span> 苏蚂蚁云数据技术有限公司（简称蚂蚁云）成立于    2017年，是国家级高新技术软件企业，专业从事云计算、大数据和智慧城市等领域的产品研发及技术服务；蚂蚁云秉持“以人为本、客户至上、生态协作、诚信敬业”的经营理念，从客户实际需求出发，为客户提供行业化的DT、IT设计咨询、方案规划、建设交付、运营维护、综合运营、行业应用软件开发等全方位的解决方案及技术服务。</p>
        <b-button variant="outline-info"
          class="mt-5 px-5"
          @click="handleAboutClick"
        >了解更多</b-button>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['setSubNavIndex']),
    handleAboutClick() {
      this.setSubNavIndex(0)
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.container {
  padding-top: 70px;
  padding-bottom: 70px;
}
@media screen and (max-width: 992px) {
  .title {
    margin-top: 15px;
  }
  .title, .sub-title, .desc {
    text-align: center;
  }
  .sub-title, .btn {
    display: block;
    margin: 0 auto;
  }
}
.first-letter {
  font-size: 32px;
  color: #17a2b8;
}
</style>
