const express = require('express')
const {TweetController,LikeController,CommentController,AuthController} = require('../../controllers/index.js')
const {authenticate} = require('../../middlewares/authenticate.js')
const router = express.Router()

router.post('/tweets',authenticate,TweetController.createTweet)
router.post('/likes/toggle',authenticate,LikeController.toggleLike)
router.post('/comments',authenticate,CommentController.createComment)
router.get('/tweets/:id',authenticate,TweetController.getTweet)
router.post('/signup',AuthController.signUp)
router.post('/login',AuthController.logIn)

module.exports = router
