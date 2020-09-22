<template>
  <section>
    <div class="container py-5">
      <b-row>
        <b-col cols="10" offset="1">
          <b-card no-body class="mb-5"
            v-for="(item, index) of productList"
            :key="index"
          >
            <b-row class="content" no-gutters>
              <i class="top"></i>
              <i class="bottom"></i>
              <b-col md="5"
                :data-wow-delay="(0.2 * index) + 's'"
                :offset-md="index === 1 ? 1 : 0" :order="index == 1 ? 1 : 0"
              >
                <b-card-img :src="item.icon" height="300" fluid class="rounded-0 picture" :class="{special: index == 1}"></b-card-img>
              </b-col>
              <b-col
                :data-wow-delay="(0.2 * index) + 's'"
                :offset-md="index === 1 ? 0 : 1" md="6"
                :order="index == 1 ? 0 : 1"
              >
                <b-card-body class="h-100 d-flex justify-content-center align-items-center flex-column text-center">
                  <b-card-title>{{item.title}}</b-card-title>
                  <b-card-text class="w-100">{{item.desc}}</b-card-text>
                  <b-button variant="outline-info"
                    @click="$router.push('/business/'+item.id)"
                  >查看详情</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
if (process.browser) { // 在这里根据环境引入wow.js
  var {WOW} = require('wowjs')
}

export default {
  data() {
    return {
      productList: [
        {id: 1, icon: require('~/static/img/business/business01.jpg'), title: '互联网+政务', desc: '江苏蚂蚁云以阿里、数梦工场为基础，将互联网的能力与政务进行创新融合，在流程优化的基础上，引入以资源集约共享、弹性伸缩、极致体验、敏捷支撑为特征的互联网技术，从而实现政务便民服务、政务管理与辅助决策以及产业支持等精细化的政务体系。'},
        {id: 2, icon: require('~/static/img/business/business02.jpg'), title: '互联网+企业', desc: '以卓越绩效管理为目标，引入全局的、整体的、一贯的管理理念，打造“产供销一体、管控衔接、高效协同、三流合一”的管理信息系统，在企业推行先进的管理理念，使采购、销售、生产、质量、财务、成本等业务整合贯通，协同运作，使企业管理更加透明化、精细化和规范化。'},
        {id: 3, icon: require('~/static/img/business/business03.jpg'), title: '智慧城市（城市治理）', desc: '通过政务外网打通各委办局网络，集成综治大联动、智慧交运、智慧公交、智慧水务等业务系统的整屏、高分、关联展示。感知城市状态，实现城市实时的数据采集与分析处理，让城市管理智慧化、精细化，为城市智慧化管理提供技术保障保障 城市重大活动安全，提升城市全方位掌控能力，提高应急事件决策效率，实现事前事中事后的全流程跟踪处理，防范于未然。'}
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
@import '@/assets/styles/variables.scss';
.card {
  border: 5px solid #e8e8e8;
  box-shadow: 3px 3px 12px #e8e8e8;
}
.card:hover {
  .picture {
    transform: translate(0, 0)
  }
}
.picture {
  object-fit: cover;
  transition: all 0.6s;
  transform: translate(-30px, -30px);
  &.special {
    transform: translate(30px, -30px)
  }
}
@media screen and (max-width: 992px) {
  .picture {
    transform: translate(0, 0) !important;
  }
  .card {
    border: none;
  }
  .top, .bottom {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .picture {
    height: 200px;
  }
}
.content {
  position: relative;
  .top {
    position: absolute;
    top: -5px;
    left: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid  $theme-color;
    border-top: 5px solid  $theme-color;
    transition: all 0.6s;
  }
  .bottom {
    position: absolute;
    right: -5px;
    bottom: -5px;
    width: 0;
    height: 0;
    border-bottom: 5px solid $theme-color;
    border-right: 5px solid  $theme-color;
    transition: all 0.6s;
  }
}
.content:hover {
  box-shadow: 3px 3px 12px $theme-color;
  .top, .bottom {
    width: 100%;
    height: 100%;
  }
}
</style>
