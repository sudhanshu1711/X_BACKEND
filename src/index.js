const express = require('express')
const connect = require('./config/database.js')
const APIRoutes = require('./routes/index.js')
const bodyParser = require('body-parser')
const {UserRepo,TweetRepo} = require('./repository/index.js')
const LikeService = require('./services/like-service.js')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',APIRoutes)

app.listen(3000,async()=>{
    console.log('server started at 3000')
    await connect();
    console.log('mongodb connected')
     const userRepo = new UserRepo()
    const tweetRepo = new TweetRepo()
    const tweets = await tweetRepo.getAll(0,10)
    const users = await userRepo.getAll()
    const likeService = new LikeService()
    await likeService.toggleLike(tweets[0].id,'Tweet',users[0].id)
})