let Koa = require('koa')
const app = new Koa()
const {connect , initSchemas} = require('./database/init.js')
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')
const Router = require('koa-router')
let router = new Router()


app.use(bodyparser())
app.use(cors())

let user = require('./appApi/User.js')
let Commodity = require('./appApi/Commodity.js')
// load all subrouting
router.use('/user',user.routes())
router.use('/Commodity',Commodity.routes())

//load router middle
app.use(router.routes())
app.use(router.allowedMethods())

;(async()=>{
    await connect()
    initSchemas()
})()


app.use(async(ctx)=>{
    ctx.body = `<h1>koa</h1>`
})
app.listen('3000',()=>{
    console.log('[Server] starting at port 3000')
})