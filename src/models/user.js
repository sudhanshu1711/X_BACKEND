const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/configFile.js')

const userSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  }
},{timestamps:true})

userSchema.pre('save',function(next){
   const user = this
   const SALT = bcrypt.genSaltSync(9)
   const encryptedPassword = bcrypt.hashSync(user.password,SALT)
   user.password=encryptedPassword
   next()
})
userSchema.methods.comparePassword = function compare(password){
       return bcrypt.compareSync(password,this.password)
}
userSchema.methods.genJWT = function generate(){
  return jwt.sign({id:this.id,email:this.email},JWT_SECRET,{
    expiresIn:'1h'
  })
}
const User = mongoose.model('User',userSchema)

module.exports = User