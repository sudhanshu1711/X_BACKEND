const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')

const{AWS_BUCKET_NAME,AWS_REGION,AWS_SECRET_KEY,AWS_ACCESS_KEY} = require('./configFile.js')

aws.config.update({
    region:AWS_REGION,
    secretAccessKey:AWS_SECRET_KEY,
    accessKeyId:AWS_ACCESS_KEY
})

const s3 = new aws.S3()

const upload = multer({
    storage: multerS3({
        s3:s3,
        bucket:AWS_BUCKET_NAME,
        acl:'public-read',
        metadata:function(req,file,cb){
            cb(null,{fieldName:file.fieldname})
        },
        key:function(req,file,cb){
            cb(null,Date.now().toString())
        }
    })
})
module.exports =upload 