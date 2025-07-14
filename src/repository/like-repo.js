const Like = require('../models/like.js')
const crudRepo = require('./crud-repo.js')
class LikeRepo extends crudRepo{
  constructor(){
    super(Like)
  }
  async findByUserAndLikeable(data){
    try {
      const like = await Like.findOne(data)
      return like
    } catch (error) {
      throw error
    }
  }
}
module.exports = LikeRepo