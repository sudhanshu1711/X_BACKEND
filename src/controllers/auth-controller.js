const {UserService} = require('../services/index.js')

const userService = new UserService()

const signUp = async(req,res)=>{
      try {
        const response = await userService.signUp({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        })
        return res.status(200).json({
            success:true,
            message:'Successfully created a new user',
            data:response,
            err:{}
        })
      } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Unable to create a user',
            data:{},
            err:error
        })
      }
    }
  const logIn = async(req,res)=>{
    try {
      const token = await userService.signin(req.body)
      return res.status(200).json({
        message:'successfully logged in',
        success:true,
        data: token,
        err:{}
      })
    } catch (error) {
      console.log('error',error)
      return res.status(500).json({
            success:false,
            message:'Something went wrong',
            data:{},
            err:error
        })
    }
  }
module.exports = {signUp,logIn}