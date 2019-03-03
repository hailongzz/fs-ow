const mongoose = require('mongoose')
const db = "mongodb://localhost/Gardenia"
const glob = require('glob')
const {resolve} = require('path')

exports.initSchemas = ()=>{
    glob.sync(resolve(__dirname,'./schema','**/*.js/')).forEach(require)
}

exports.connect = ()=>{
    mongoose.connect(db,{useNewUrlParser:true})
    let maxConnectTimes = 0

    return new Promise((resolve,reject)=>{
        //增加数据库监听事件
        mongoose.connection.on('disconnected',()=>{
            console.log('数据库断开********************')
            if(maxConnectTimes>=3){
                maxConnectTimes++
                mongoose.connect(db)
            }else{
                reject()
                throw new Error('数据库出现问题请联系管理员***')
            }
        })

        mongoose.connection.on('error',()=>{
            console.log('****************数据错误')
            if(maxConnectTimes>=3){
                maxConnectTimes++
                mongoose.connect(db)
            }else{
                reject()
                throw new Error('数据库出现问题请联系管理员***')
            }
            reject()
        })
        mongoose.connection.once('open',()=>{
            console.log('Mongodb connected success')
            resolve()
        })
        
    })
}