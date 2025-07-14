const {CommentRepo,TweetRepo} = require('../repository/index.js')

class commentService{
    constructor(){
        this.commentRepo = new CommentRepo()
        this.tweetRepo = new TweetRepo()
    }
    async create(modelId,modelType,userId,content){
        if(modelType=='Tweet'){
        var commentable = await this.tweetRepo.get(modelId)
      }
      else if(modelType=='Comment'){
        var commentable = await this.commentRepo.get(modelId)
      }
      else{
       throw new Error('Unknown model type')
      }
      const comment = await this.commentRepo.create({
        content:content,
        userId:userId,
        onModel:modelType,
        commentable:modelId,
        comments:[]
      })
      commentable.comments.push(comment)
      await commentable.save()
      return comment
    }
}
module.exports = commentService