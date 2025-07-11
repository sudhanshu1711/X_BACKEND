const Hashtag = require('../models/hashtag.js')

class HashtagRepo {
    async create(data){
     try {
        const tag = await Hashtag.create(data)
        return tag
     } catch (error) {
        throw error
     }
    }
    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data)
            return tags
        } catch (error) {
             throw error            
        }
    }
    async delete(id){
       try {
        const tag = await Hashtag.findByIdAndDelete(id)
        return tag
       } catch (error) {
        throw error       
       }
    }
    async update(id,data){
       try {
        const tag = await Hashtag.findByIdAndUpdate(id,data)
        return tag
       } catch (error) {
        throw error
       }
    }
    async get(id){
     try {
     const tag = await Hashtag.findById(id)
      return tag
     } catch (error) {
       throw error  
     }
    }
    async findByName (titleList){
        try {
            const tags = await Hashtag.find({
                title:titleList
            })
            return tags
        } catch (error) {
            throw error
        }
    }
}
module.exports = HashtagRepo