const Koa = require('koa')
const Router = require('koa-router')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const parser = require('koa-bodyparser')
const nodemailer = require('nodemailer')
const cors = require('koa2-cors')

const app = new Koa()
const router = new Router()


const transport = nodemailer.createTransport({
  host: 'smtp.mxhichina.com',
  port: '25',
  secureConnection: true,
  auth: {
    user:'*****',  // 邮箱账号
    pass: '*****'  // 邮箱密码
  }
})

router.post('/sendmail', async (ctx, next) => {
  const { html, type } = ctx.request.body
  const mailOptions = {
    from: `一条来自蚂蚁云网站的${type} public@mayiyundt.com`,
    to: 'public@mayiyundt.com',
    subject: `一条来自蚂蚁云网站的${type}`,//邮件标题
    html,//邮件内容
  }
  let error_code = 200
  let error_msg = 'success'
  try{
    await transport.sendMail(mailOptions)
  }catch(err) {
    error_code = 400
    error_msg = err.message
  }
  ctx.body = {
    error_code,
    error_msg
  }
})

app.use(cors())
app.use(parser())
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(router.routes(), router.allowedMethods())
  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
