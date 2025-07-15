const JWT = require('passport-jwt')
const {JWT_SECRET}= require('./configFile.js')
const User = require('../models/user.js')

const JWTStartegy = JWT.Strategy
const ExtractJWT = JWT.ExtractJwt

const opts ={
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : JWT_SECRET
}

const passportAuth = (passprt)=>{
   passprt.use(new JWTStartegy(opts,async(jwt_payload,done)=>{
    const user = await User.findById(jwt_payload.id)
    if(!user){
        done(null,false)
    }
    else{
        done(null,user)
    }
   }))
}
module.exports = passportAuth