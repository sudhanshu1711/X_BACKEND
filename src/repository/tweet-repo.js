const { TweetController } = require('../controllers/index.js')
const Tweet = require('../models/tweet.js')
const crudRepo = require('../repository/crud-repo.js')
class TweetRepo extends crudRepo{
   constructor(){
      super(Tweet)
   }
    async create(data){
     try {
        const tweet = await Tweet.create(data)
        return tweet
     } catch (error) {
        throw error
     }
    }
    async getWithComments(id){
      try {
         const tweet = await Tweet.findById(id).populate({path:'comments'}).lean()
         return tweet
      } catch (error) {
         throw error
      }
    }
   async getAll(offset,limit){
      try {
         const tweet = await Tweet.find().skip(offset).limit(limit)
         return tweet
      } catch (error) {
         throw error
      }
   }
   async find(id){
      try {
         const tweet = await Tweet.findById(id).populate({path:'likes'})
         return tweet
      } catch (error) {
         throw error
      }
   }
}
module.exports = TweetRepo