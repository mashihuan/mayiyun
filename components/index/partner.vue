<template>
  <my-slot :title="title" :desc="desc" :showBgColor="true" >
    <div class="wrap">
      <div class="mt-4 d-none d-lg-block d-xl-block">
        <div v-swiper:mySwiper1="swiperOptions">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) of partnerList" :key="index">
              <div class="img-wrap mx-3 p-4">
                <b-img :src="item.icon" fluid alt="partner" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 d-block d-lg-none d-xl-none">
        <div v-swiper:mySwiper2="swiperOptions2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) of partnerList" :key="index">
              <div class="img-wrap mx-3 p-4">
                <b-img :src="item.icon" fluid alt="partner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      title: '合作伙伴',
      desc: '蚂蚁云与战略合作伙伴通过双方资源投入、优势互补、技术协同，共同推进面向政企行业的云计算和大数据业务发展。',
      partnerList: [
        {icon: require('~/static/img/partner/shumeng.png')},
        {icon: require('~/static/img/partner/aliyun.png')},
        {icon: require('~/static/img/partner/zhongtongfu.png')},
        {icon: require('~/static/img/partner/dianxin.png')},
        {icon: require('~/static/img/partner/yidong.png')},
        {icon: require('~/static/img/partner/liantong.png')}
      ],
      swiperOptions: {
        slidesPerView : 4,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true
      },
      swiperOptions2: {
        slidesPerView : 2,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 70px;
}
.img-wrap {
  text-align: center;
  background:#fff;
  img {
    transform: scale(1);
    transition: all 0.5s;
  }
}
.img-wrap:hover {
  transform: scale(1);
  img {
    transform: scale(1.1);
  }
}
</style>
