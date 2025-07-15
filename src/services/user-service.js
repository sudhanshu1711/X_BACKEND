const {UserRepo} = require('../repository/index.js')

class userService {
      constructor(){
        this.userRepo = new UserRepo()
      }
      async signUp(data){
        try {
            const user = await this.userRepo.create(data)
            return user 
        } catch (error) {
            throw error
        }
      }
      async getUserByEmail(email){
          try {
            const user = await this.userRepo.findBy({email})
            return user 
        } catch (error) {
            throw error
        }
      }
      async signin(data){
      try{
      const user = await this.getUserByEmail(data.email)
      if(!user){
        throw {
          message:'no user found',
          success:false
        }
      }
      if(!user.comparePassword(data.password)){
         throw{
          message:'password incorrect',
          success:false
        }
      }
       const token = user.genJWT()
       return token
    }
      catch(error){
       throw error
      }
      }
}
module.exports = userService