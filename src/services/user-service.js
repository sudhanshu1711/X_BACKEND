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
}
module.exports = userService