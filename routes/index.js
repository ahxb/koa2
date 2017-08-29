
const router = require ('koa-router') ();
// const koaBody = require('koa-body')({multipart: true});


router.get ('/getA', async (ctx, next) => {

    console.log (1111, ctx.request.query);
    ctx.body = {
        success: '200',
        data: {
            num: 'leoisok'
        }
    }
})


router.post ('/postA', async (ctx, next) => {


    console.log (44,  ctx.request.body);


    // let postData = await parsePostData (ctx);

    ctx.body = {

        success: '200',
        data: {
            num: ctx.request.body.name
        }
    }
})

// 解析上下文里node原生请求的POST参数
function parsePostData (ctx) {
    return new Promise ((resolve, reject) => {
        try {
            let postdata = "";
            ctx.req.addListener ('data', (data) => {

                postdata += data
            })
            ctx.req.addListener ("end", function () {

                let parseData = parseQueryStr (postdata)
                //测试异步
                setTimeout (function () {
                    resolve (parseData)
                }, 300)

            })
        } catch (err) {
            reject (err)
        }
    })
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr (queryStr) {
    let queryData = {}
    // console.log(111,queryStr);
    // let queryStrList = queryStr.split (',')
    let queryStrList = JSON.parse (queryStr);
    // console.log (22,  queryStrList)
    // for (let [index, queryStr] of queryStrList.entries ()) {
    //     let itemList = queryStr.split ('=')
    //     queryData[itemList[0]] = decodeURIComponent (itemList[1])
    // }
    return queryStrList
}

module.exports = router
