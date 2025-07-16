const {TweetService} = require('../services/index.js')
const upload = require('../config/s3-config.js')
const singleUploader = upload.single('image') 
const tweetService = new TweetService()

const createTweet = async(req,res)=>{
    try {
        singleUploader(req,res, async function(err,data){
            if(err){
                return res.status(500).json({error:err})
            }
            console.log('image file is',req.file)
            const payload = req.body
            payload.image = req.file.location
        const response = await tweetService.create(payload)
        return res.status(201).json({
            success:true,
            message:"Successfully created a new tweet",
            data:response,
            err:{}
        })
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            data:{},
            err:error
        })
    }
}
const getTweet = async(req,res)=>{
    try {
        const respone = await tweetService.get(req.params.id)
        return res.status(201).json({
            success:false,
            message:'successfully fetched a tweet',
            data:respone,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            data:{},
            err:error
        })
    }
}
module.exports = {createTweet,getTweet}