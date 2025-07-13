const Like = require('../models/like.js')
const crudRepo = require('./crud-repo.js')
class LikeRepo extends crudRepo{
  constructor(){
    super(model)
  }
}
module.exports = LikeRepo