const { default: mongoose } = require('mongoose')
const monogoose = require('mongoose')

const hashtagSchema = new mongoose.schema({
    title:{
        type:String,
        required:true
    },
    tweets:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Tweet'
        }
    ]
},{timestamps:true});

const Hashtag = mongoose.model('Hashtag',hashtagSchema)
module.exports =  Hashtag
