const express = require('express')
const connect = require('./config/database.js')
const app = express()


const TweetRepo = require('./repository/tweet-repo.js')
const Comment = require('./models/comment.js')

app.listen(3000,async()=>{
    console.log('server started at 3000')
    await connect();
    console.log('connected')
})