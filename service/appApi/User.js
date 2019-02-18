const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()

router.get('/',async(ctx)=>{
    ctx.body = "用户操作首页"
})
router.post('/register', async(ctx)=>{
        //get model
        const User = mongoose.model('User')
        //take web set post package a new User Object
        let newUser = new User(ctx.request.body)
        console.log(ctx.request.body)
        ctx.body = ctx.request.body
        //use mongoose save function  save then judge sucess  return result
        await newUser.save().then(()=>{
            ctx.body = {
                code:200,
                message:'注册成功'
            }
        }).catch((error)=>{
            //fail return code=500 and return mistake message
            ctx.body = {
                code:500,
                message:error
            }
        })
})
router.post('/login', async(ctx)=>{
       let loginUser = ctx.request.body
       let userName = loginUser.userName
       let passWord = loginUser.passWord
       //require user model
       const User = mongoose.model('User')
       await User.findOne({userName:userName}).exec().then(async(res)=>{
           console.log(res+'=====')
           if(res){
               let newUser = new User()
               await newUser.comparePassword(passWord,res.passWord)
               .then((isMatch)=>{
                ctx.body={code:200,message:isMatch}
               }).catch(()=>{
                ctx.body={code:500,message:error}
               })
           }else{
            ctx.body={code:200,message:'用户名不存在'}
           }
       }).catch(error=>{
        console.log(error)
        ctx.body={code:500,message:error}
    })
})

module.exports = router