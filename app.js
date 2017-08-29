const koa = require('koa')
const app = new koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')

const logger = require('koa-logger')
const cors = require('koa2-cors');



const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// 使用ctx.body解析中间件
//cors 跨域解决
app.use(async function(ctx, next) {

    ctx.set("Access-Control-Allow-Origin", ctx.request.header.origin);
    ctx.set("Access-Control-Allow-Credentials", true);
    ctx.set("Access-Control-Max-Age", 86400000);
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");

    if (ctx.request.method == "OPTIONS") {
        ctx.response.status = 200
    }
    await next()
})


var myRouter=require('./routes/index');

app.use(myRouter.routes())
.use(myRouter.allowedMethods())
//allowedMethods，顾名思义：就是当前接口运行的method。 比如，一个提供数据的接口，就可以设置为GET， 当客户端发送POST请求时，就会直接返回失败。




app.listen(3003);
console.log('listen 3003');

