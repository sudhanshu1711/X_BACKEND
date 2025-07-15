const express = require('express')
const {TweetController,LikeController,CommentController,AuthController} = require('../../controllers/index.js')
const router = express.Router()

router.post('/tweets',TweetController.createTweet)
router.post('/likes/toggle',LikeController.toggleLike)
router.post('/comments',CommentController.createComment)
router.get('/tweets/:id',TweetController.getTweet)
router.post('/signup',AuthController.signUp)

module.exports = router
