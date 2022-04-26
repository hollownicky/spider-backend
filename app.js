const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')

const parameter = require('koa-parameter')
const moment = require('moment')
const config = require('./config')

const admin = require('./routes/admin')

// MySQL 数据库连接
require('./config/connect')

// error handler
onerror(app)

/* middleware start */
// cors跨域，注意位置
app.use(cors())

app.use(bodyParser({
  enableTypes:['json', 'form', 'text']
}))

app.use(logger(() => {
  console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
}))

app.use(parameter(app))

app.use(json())

app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))
/* middleware end */

/* routes start */
app.use(admin.routes(), admin.allowedMethods())
/* routes end */

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'prod') {
  // 监听成功后执行回调
  app.listen(config.port, () => {
    try {
      console.log('SUCCESS')
    } catch(e) {
      console.error('ERROR', e.name)
    }
    console.log('koa-love listening on port', config.port)
    console.log('God bless love....')
  })
}

module.exports = app