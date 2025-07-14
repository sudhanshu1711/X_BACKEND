const express = require('express')
const {TweetController,LikeController,CommentController} = require('../../controllers/index.js')
const router = express.Router()

router.post('/tweets',TweetController.createTweet)
router.post('/likes/toggle',LikeController.toggleLike)
router.post('/comments',CommentController.createComment)
router.get('/tweets/:id',TweetController.getTweet)

module.exports = router
