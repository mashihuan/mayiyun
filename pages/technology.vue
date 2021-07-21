<template>
  <section class="technology">
    <b-tabs content-class="mt-3" align="center" active-nav-item-class="text-primary">
      <b-tab
        v-for="(item, index) of list"
        :key="index"
        :title="item.title"
        :active="active === index"
      >
        <div class="container">
          <article class="text-dark desc" v-if="item.desc" v-html="item.desc"></article>
          <!-- 表单部分 -->
          <template v-if="index === 2">
            <b-row align-h="center">
              <b-col md="8" class="text-muted">欢迎您对我们提出宝贵的意见,相信有您的支持,我们一定会做的更好,让客户更加满意!</b-col>
            </b-row>
            <b-row align-h="center">
              <b-col md="8">
                <b-form @submit="onSubmit" class="mt-4 mb-5">
                  <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                    class="mb-4"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.name"
                      required
                      placeholder="请输入您的姓名"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label-for="input-2" class="mb-4">
                    <b-form-input
                      id="input-2"
                      v-model="form.phone"
                      required
                      placeholder="请输入您的手机/邮箱"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-3" label-for="input-3" class="mb-4">
                    <b-form-select
                      id="input-3"
                      v-model="form.suggest"
                      placeholder="反馈类型"
                      :options="suggest"
                      required
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group id="input-group-4" label-for="input-3" class="mb-5">
                    <b-form-textarea
                      id="input-4"
                      v-model="form.message"
                      required
                      rows="5"
                      placeholder="请输入您想说的话"
                    ></b-form-textarea>
                  </b-form-group>

                  <b-button type="submit" block variant="info">提 交</b-button>
                </b-form>
              </b-col>
            </b-row>
          </template>
        </div>
      </b-tab>
    </b-tabs>
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
      active: 0,
      list: [
        {
          title: '服务理念',
          desc:   `<p style="text-indent: 2em">大数据被认为是继信息化和互联网后整个信息革命的又一次高峰。云计算和大数据共同引领以数据为材料，计算为能源的又一次生产力的大解放。江苏蚂蚁云数据技术有限公司是大数据价值创新与行动的先驱者，赋予引领人们进入大数据时代为使命，以成为最值得信赖的大数据服务公司为愿景，诚信、尊重、团队与专业，扮演了贯彻使命与实现愿景的重要角色，为政府、企业等组织提供大数据产品及服务。</p>
          <p style="text-indent: 2em">江苏蚂蚁云数据技术有限公司始终贯彻自主创新风格，无论是产品技术抑或经营管理，都包含了别出心裁的创意及与时俱进的思想。在未来，蚂蚁云还将继续以客户服务为中心，提供体系化、标准化、细节化、高价值化的服务，在企业信息化IT服务领域不断创新，并获得永不枯竭的长远发展动力。面对日益复杂的商业环境，企业需要借助更专业、更符合企业个性需求的服务来提升信息化系统的应用能力和水平，江苏蚂蚁云数据技术有限公司主要从事大数据产品的研发，一直以强大的先进技术力量为后盾，以创新思维而立身，又因不断革新的数据技术而持续进步，并带来了累累硕果。</p>
          <p style="text-indent: 2em">企业需要建立基于海量数据的深入分析能力。在大数据时代，数据分析能力的强弱，类似于工业时代制造工艺的先进与否。我们的目标客户有较高的数据分析挖掘需求，帮用户解决数据的处理问题，根据客户的特点进行推荐产品，进行个性化的页面展示。我们以标准化的服务用语，热诚的服务态度，清新的服务形象面对广大客户，广泛采纳用户意见，认真处理用户投诉，以严格的监管体制保护用户的各项权益。当您作为尊敬的用户选择江苏蚂蚁云数据技术有限公司产品的同时，您也将享受到国内同类行业中最专业、最富有责任心、最完善周到的技术服务。</p>`
        },
        {
          title: '服务体系',
          desc: `<p style="text-indent: 2em">我公司提供优秀的技术支持和售后服务,确保本公司所提供的产品在运行期间能够稳定、安全、高效的运行，从而保证用户业务的正常运行。</p>
            服务流程<br/>
            1、免费咨询：针对客户的疑问，我们将向客户介绍我司的概况和工具信息，并提供相关的资料和建议。<br/>
            2、拜访客户：通过登门拜访、当面沟通，来了解政府、企业具体需求，为制定合适的解决方案做基础。<br/>
            3、制定方案及报价：在客户认同解决方案的基础上，细化解决方案并提供产品报价。<br/>
            4、签订合同：签订合同后，我司则履行合同中要求的责任和义务。<br/>
            5、行业需求培训：收集客户所在行业的典型技术需求，制作模板并对客户进行培训。<br/>
            6、项目实施阶段：该阶段，我司将对用户提供细致周到的技术支持服务，如远程在线/电话指导，答疑，如果有远程不能解决的问题，我们将提供现场支持。<br/>
            7、跟踪指导服务：我们有着完善的售后服务体系，通过愉快的合作，将与客户建立终生的合作伙伴关系。<br/>
            售后服务<br/>
            <p style="text-indent: 2em">江苏蚂蚁云数据技术有限公司致力于为用户提供最专业及最完善的售后服务。客户如果在使用产品过程中遇到了困难，可以通过在线服务平台进行咨询江苏蚂蚁云数据技术有限公司，一线的服务团队会与客户进行对接，最大程度让客户满意。</p>
            服务承诺<br/>
            实时技术支持<br/>
            1、接到要求时向客户提供电话远程咨询与技术支持。<br/>
            2、向客户提供7x24x365的全年实时电话远程技术支持。<br/>
            3、向客户提供5x12的工作日维护技术支持。<br/>

            响应服务模式<br/>
            <p style="text-indent: 2em">江苏蚂蚁云数据技术有限公司可以根据具体项目的实际情况，为用户提供优质的7×24热线响应服务模式。7×24热线响应服务模式，用户可以通过不同方式向我司技术人员提出技术响应需求。如：通过电话、传真、信函、E-mail、来访。</p>
            <p style="text-indent: 2em">
            针对本公司的售后服务响应模式，我们目前提供5×12热线响应服务模式。</p>`
        },
        {
          title: '在线反馈'
        }
      ],
      form: {
        name: '',
        phone: '',
        suggest: null,
        message: '',
      },
      suggest: [
        {value: null, text: '反馈类型'},
        {value: '需求上报', text: '需求上报'},
        {value: '商务洽谈', text: '商务洽谈'},
        {value: '意见建议', text: '意见建议'},
        {value: '其它', text: '其它'}
      ],
    }
  },
  watch: {
    subNavIndex(newVal, oldVal) {
      this.active = newVal - 1
    }
  },
  computed: {
    ...mapState(['subNavIndex']),
  },
  mounted() {
    this.active = this.subNavIndex == 0 ? 0 : this.subNavIndex - 1
    if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init()
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
        type: '反馈',
        html: `
          <p><strong>发信人姓名：</strong></p>
          <p>${this.form.name}</p>
          <p><strong>发信人联系方式：</strong></p>
          <p>${this.form.phone}</p>
          <p><strong>发信人反馈类型：</strong></p>
          <p>${this.form.suggest}</p>
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
@import '@/assets/styles/variables.scss';

::v-deep .nav-tabs {
  padding: 15px 0;
  .nav-link {
    border-color: transparent;
    font-size: 16px;
    color: #333333;
  }
  .nav-link:hover {
    color: #0056b3;
  }
}
.desc {
  line-height: 3.5;
}
::v-deeplabel {
  color: #6c757d !important;
}
::v-deep .form-control, ::v-deep .custom-select {
  border-radius: 0 !important;
  border-color: #e4eaec !important;
  color: #aaaaaa !important;
}
::v-deep .form-control::placeholder, ::v-deep .custom-select::placeholder {
  color: #aaaaaa !important;
}
</style>
