const express = require('express')
const connect = require('./config/database.js')
const APIRoutes = require('./routes/index.js')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',APIRoutes)

app.listen(3000,async()=>{
    console.log('server started at 3000')
    await connect();
    console.log('mongodb connected')
})