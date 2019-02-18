const mongoose = require('mongoose') //statement mogoose
const Schema = mongoose.Schema        //statement schema
const ObjectId = Schema.Types.ObjectId
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

//create Schema 
const userSchema = new Schema({
      UserId:{type:ObjectId},
      userName : {unique:true, type:String},
      passWord : {type:String},
      createAt : {type:Date,default:Date.now()},
      lastLoginAt:{type:Date,default:Date.now()}

},{
    collection:'user'
})

userSchema.pre('save', function(next){
    console.log(next)
    bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
        if(err) return next(err)
        bcrypt.hash(this.passWord,salt,(err,hash)=>{
            if(err) return next(err)
            this.passWord = hash
            console.log(this.passWord,hash)
            next()
        })
    })
})
userSchema.methods={
    comparePassword:(_password,password)=>{
       return new Promise((resolve,reject)=>{
        bcrypt.compare(_password,password,(err,isMatch)=>{
            if(!err) resolve(isMatch)
            else reject(err)
        })
       })
    }
}
//relese Schema
mongoose.model('User',userSchema)