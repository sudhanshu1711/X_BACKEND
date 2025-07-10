const Tweet = require('../models/tweet.js')

class TweetRepo {
    async create(data){
     try {
        const tweet = await Tweet.create(data)
        return tweet
     } catch (error) {
        throw error
     }
    }
    async delete(id){
       try {
        const tweet = await Tweet.findByIdAndDelete(id)
        return tweet
       } catch (error) {
        throw error       
       }
    }
    async update(id,data){
       try {
        const tweet = await Tweet.findByIdAndUpdate(id,data)
        return tweet
       } catch (error) {
        throw error
       }
    }
    async get(id){
     try {
     const tweet = await Tweet.findById(id)
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
        } catch (error) {
           throw error            
        }
    }
}
module.exports = TweetRepo