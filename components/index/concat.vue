<template>
  <section class="concat bg-dark text-light">
    <div class="container">
      <b-row>
        <b-col lg="6" sm="10" md="10" xs="10" class="wow slideInLeft">
          <dl>
            <dt class="title mb-2">联系我们</dt>
            <dd class="text-justify">江苏蚂蚁云数据技术有限公司（简称蚂蚁云）成立于2017年，是国家级高新技术软件企业，专业从事云计算、大数据和智慧城市等领域的产品研发及技术服务；蚂蚁云秉持“以人为本、客户至上、生态协作、诚信敬业”的经营理念，从客户实际需求出发，为客户提供行业化的DT、IT设计咨询、方案规划、建设交付、运营维护、综合运营、行业应用软件开发等全方位的解决方案及技术服务。</dd>
            <dd>地址： 江苏省南京市鼓楼区广州路37号江苏科技大厦27F</dd>
            <dd>电话： 025-5180 2988</dd>
            <dd>邮箱：public@mayiyundt.com</dd>
          </dl>
        </b-col>
        <b-col lg="6" sm="10" xs="10" md="10" class="wow slideInRight">
          <b-form @submit="onSubmit">
            <b-form-input
              class="mb-4"
              v-model="form.name"
              name="发信人姓名"
              required
              placeholder="您的姓名"
            ></b-form-input>
            <b-form-input
              class="mb-4"
              v-model="form.phone"
              required
              name="发信人联系方式"
              placeholder="您的手机/邮箱"
            ></b-form-input>
            <b-form-textarea
              class="mb-4"
              v-model="form.message"
              required
              name="发信人留言"
              placeholder="您的留言"
            ></b-form-textarea>
            <b-button type="submit" block variant="success">提 交</b-button>
          </b-form>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      const phoneReg = /^1[3456789]\d{9}$/
      const emailReg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
      if(!phoneReg.test(this.form.phone) && !emailReg.test(this.form.phone)) {
        this.$bvToast.toast(`提交失败，请输入正确的手机号或邮箱号`, {
          title: '提交结果',
          variant: 'danger',
          autoHideDelay: 5000
        })
        return
      }
      const res = await this.$axios.post(`/sendmail`, {
        type: '留言',
        html: `
          <p><strong>发信人姓名：</strong></p>
          <p>${this.form.name}</p>
          <p><strong>发信人联系方式：</strong></p>
          <p>${this.form.phone}</p>
          <p><strong>发信人留言：</strong></p>
          <p>${this.form.message}</p>
        `
      })
      if(res.data.error_code === 200) {
        this.form = {
          name: '',
          phone: '',
          message: ''
        }
        this.$bvToast.toast(`提交成功，我们将尽快与您取得联系！`, {
          title: '提交结果',
          variant: 'success',
          autoHideDelay: 5000
        })
      }else {
        this.$bvToast.toast(`提交失败，请稍后重试！`, {
          title: '提交结果',
          variant: 'danger',
          autoHideDelay: 5000
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.concat {
  padding: 50px 0;
  .title {
    font-size: 16px;
  }
}
</style>
