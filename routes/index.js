const router = require('koa-router')()

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

router.get('/get', async (ctx, next) => {

  console.log(1111,ctx);
  ctx.body = {
      success:'200',
      data: {
          num: 'leoisok'
      }
  }
})

router.post('/post', async (ctx, next) => {

  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
