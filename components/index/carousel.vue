<template>
  <b-carousel
    v-model="slide"
    :interval="5000"
    controls
    fade
    indicators
    background="#ababab"
    style="text-shadow: 1px 1px 2px #333; background: #ccc"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide>
      <template v-slot:img>
        <div style="position: relative">
          <b-img
          fluid
            :src="size=='big' ? require('~/static/img/banner/banner02_big.jpg') : require('~/static/img/banner/banner02_small.jpg')"
            alt="banner"
          ></b-img>
          <div class="mask mask2">
            <div class="content content2">
              <h3 class="title mb-3 wow fadeInLeft" data-wow-delay="0.2s">大数据</h3>
              <p class="desc wow mb-1 fadeInRight" data-wow-delay="0.2s">数据驱动政府、企业数字化转型</p>
              <p class="line wow fadeInUp" data-wow-delay="0.6s">We will help the governments and enterprise digital transformation</p>
            </div>
          </div>
        </div>
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template v-slot:img>
        <div style="position: relative">
          <b-img
            fluid
            :src="size=='big' ? require('~/static/img/banner/banner01_big.jpg') : require('~/static/img/banner/banner01_small.jpg')"
            alt="banner"
          ></b-img>
          <div class="mask">
            <div class="content">
              <h3 class="title mb-3 wow fadeInLeft" data-wow-delay="0.2s">云计算</h3>
              <p class="desc wow mb-1 fadeInRight" data-wow-delay="0.2s">IT基础设施提供商</p>
              <p class="line wow fadeInUp" data-wow-delay="0.6s">To provide professional infrastructure services</p>
            </div>
          </div>
        </div>
      </template>
    </b-carousel-slide>

   <!-- <b-carousel-slide>
      <template v-slot:img>
        <b-img
          fluid
          :src="size=='big' ? require('~/static/img/banner/banner01_big.jpg') : require('~/static/img/banner/banner01_small.jpg')"
          alt="banner"
        />
      </template>
    </b-carousel-slide> -->
     <!-- <b-carousel-slide>
      <template v-slot:img>
        <b-img
          fluid
          :src="size=='big' ? require('~/static/img/banner/banner02_big.jpg') : require('~/static/img/banner/banner02_small.jpg')"
          alt="banner"
        />
      </template>
    </b-carousel-slide> -->
  </b-carousel>
</template>

<script>
if (process.browser) { // 在这里根据环境引入wow.js
  var {WOW} = require('wowjs')
}

export default {
  props: {
    size: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  mounted() {
    if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init()
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.slide = slide
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.carousel .mask {
  position: absolute;
  top: 0;
  right: 15%;
  bottom: 0;
  left: 15%;
  color: #fff;
  font-size: 20px;
  z-index: 9;
  .content {
    position: absolute;
    right: 8%;
    top: 50%;
    width: 50%;
    transform: translateY(-50%);
    text-align: right;
    .title {
      font-size: 45px;
      color: #13d0b0;
      letter-spacing: 8px;
      font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3",Roboto,Arial,sans-serif;
    }
    .desc {
      font-size: 24px;
      font-weight: lighter;
      letter-spacing: 3px;
    }
    .line {
      // display: inline-block;
      // width: 100px;
      // height: 2px;
      // margin-top: 20px;
      font-size: 18px;
      font-weight: lighter;
      opacity: 0.9;
      // background: #fff;
    }
  }
  .content2 {
    left: 8%;
    text-align: left;
  }
}
@media screen and (max-width: 1400px) {
  .carousel .mask {
    .content {
      .title {
        font-size: 32px;
      }
      .desc {
        font-size: 18px;
      }
      .line {
        font-size: 14px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .carousel .mask {
    .content {
      .title {
        font-size: 34px;
      }
      .desc {
        font-size: 16px;
      }
      .line {
        font-size: 14px;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .carousel .mask {
    .content {
      .title {
        font-size: 26px;
      }
      .desc {
        font-size: 14px;
      }
      .line {
        font-size: 12px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .mask2 {
    left: 0 !important;
  }
  .carousel .mask {
    right: 0;
    .content {
      top: 55%;
      width: 70%;
      .title {
        font-size: 26px;
        opacity: 0.8;
        letter-spacing: 2px;
      }
      .desc {
        font-size: 14px;
        letter-spacing: 1px;
      }
      .line {
        // width: 50px;
        // height: 1px;
        margin-top: 0;
      }
    }
    // .content2 {
    //   top: 30%;
    // }
  }
}
</style>
