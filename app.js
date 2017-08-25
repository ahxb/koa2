const koa = require('koa')
const app = new koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors');
// const index = require('./routes/index')
// const users = require('./routes/users')

// // error handler
// onerror(app)
//
// // middlewares
// app.use(bodyparser({
//   enableTypes:['json', 'form', 'text']
// }))
// app.use(json())
// app.use(logger())
// app.use(require('koa-static')(__dirname + '/public'))
//
// app.use(views(__dirname + '/views', {
//   extension: 'pug'
// }))
//
// // logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })
//
// // routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
//
// module.exports = app


// var router = require('koa-router')();
// CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
// 下面以koa2-cors为例，


// 具体参数我们在后面进行解释
app.use(cors({
    origin:"*",
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// router.get('/a', async function (ctx) {
//   console.log(2222)
//     // ctx.send('got it');
//     ctx.body = {
//         success:'200',
//         data:{
//             num:'leoisok'
//         }
//     }
// });

var router=require('./routes/index');
app.use(router.routes())
.use(router.allowedMethods())



app.listen(3003);
console.log('listen 3003');

// 作者：__小简__
// 链接：http://www.jianshu.com/p/5b3acded5182
//     來源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。