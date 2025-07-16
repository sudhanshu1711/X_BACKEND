const dotenv = require('dotenv')

dotenv.config()

module.exports ={
    MONGODB_URI:process.env.MONGODB_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    AWS_ACCESS_KEY:process.env.AWS_ACCESS_KEY,
    AWS_SECRET_KEY:process.env.AWS_SECRET_KEY,
    AWS_REGION:process.env.AWS_REGION,
    AWS_BUCKET_NAME:process.env.AWS_BUCKET_NAME
}