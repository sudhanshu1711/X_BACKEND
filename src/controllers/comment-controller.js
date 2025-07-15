const {CommentService} = require('../services/index.js')
const commentService = new CommentService()

const createComment= async (req,res) =>{
      try {
         const response = await commentService.create(req.query.modelId,req.query.modelType,req.user.id,req.body.content)
         return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:'created a new comment'
         })        
      } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            data:{},
            message:'Something went wrong',
            err:error
        })
      }
}
module.exports ={createComment}