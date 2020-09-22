<template>
  <section :class="{bgColor: showBgColor}">
    <div class="container wrapper">
      <h3 class="title mb-3 text-center wow fadeInUp"
        data-wow-delay="0.2s"
      >{{title}}</h3>
      <div class="title-icon"></div>
      <p class="desc mt-3 mb-4 mx-5 text-muted text-center wow fadeInDown"
        data-wow-delay="0.4s"
        v-if="desc"
      >{{desc}}</p>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    showBgColor: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.bgColor {
  background: #fafafa;
}
.wrapper {
  padding: 70px 0;
  .title {
    font-size: 30px;
    font-weight: normal;
  }
  .title-icon {
    width: 30px;
    height: 5px;
    margin: 0 auto;
    background: $theme-color;
  }
  .desc {
    font-size: 16px;
  }
}
</style>
