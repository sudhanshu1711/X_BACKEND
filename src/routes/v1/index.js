const express = require('express')
const {TweetController,LikeController} = require('../../controllers/index.js')
const router = express.Router()

router.post('/tweets',TweetController.createTweet)
router.post('/likes/toggle',LikeController.toggleLike)

module.exports = router
