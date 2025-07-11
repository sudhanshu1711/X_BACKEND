const express = require('express')
const connect = require('./config/database.js')
const {TweetService} = require('./services/index.js')
const app = express()

app.listen(3000,async()=>{
    console.log('server started at 3000')
    await connect();
    console.log('mongodb connected')
})