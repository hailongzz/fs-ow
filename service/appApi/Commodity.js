const Router = require('Koa-router')
const mongoose = require('mongoose')
const fs =  require('fs')
let router = new Router()

router.get('/insertCategory',async(ctx)=>{
    fs.readFile('./data_json/category.json','utf8',(err,data)=>{
        data = JSON.parse(data)
        let count = 0;
        const Category = mongoose.model('Category')
        data.RECORDS.map((value,index)=>{
            console.log(value)
            let newCategory = new Category(value)
            newCategory.save().then(()=>{
                count++
                console.log('插入成功'+count)
            }).catch(error=>{
                console.log('插入失败'+error)
            })
        })
    })
    ctx.body = "开始导入数据"
})

// router.post('/insertCommodity',async(ctx)=>{

// })
router.get('/category', async(ctx)=>{
    try {
        let categoryList = mongoose.model('Category')
        let result = await categoryList.find().exec()
        ctx.body = {code:200,message:result}
    } catch (err) {
        ctx.body = {code:500,message:err}
    }
})

module.exports = router