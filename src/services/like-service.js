const {LikeRepo,TweetRepo,CommentRepo} = require('../repository/index.js')

class LikeService{
    constructor(){
        this.likeRepo= new LikeRepo()
        this.tweetRepo = new TweetRepo()
        this.commentRepo = new CommentRepo()
    }
    async toggleLike(modelId,modelType,userId){
      if(modelType=='Tweet'){
        var likeable = await this.tweetRepo.find(modelId)
      }
      else if(modelType=='Comment'){
        var likeable = await this.commentRepo.get(modelId)
      }
      else{
       throw new Error('Unknown model type')
      }
      const exists = await this.likeRepo.findByUserAndLikeable({
        user:userId,
        onModel:modelType,
        likeable:modelId
      })
      if(exists){
        likeable.likes.pull(exists.id)
        await likeable.save()
         await this.likeRepo.model.deleteOne({ _id: exists.id });
        var isAdded = false
      }
      else{
        const newLike= await this.likeRepo.create({
            user:userId,
            onModel:modelType,
            likeable:modelId
        })
        likeable.likes.push(newLike.id)
        await likeable.save()
        var isAdded= true
      }
      return isAdded
    }
}
module.exports = LikeService