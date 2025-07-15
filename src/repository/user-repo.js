const User = require('../models/user.js')
const crudRepo = require('./crud-repo.js')

class userRepo extends crudRepo{
    constructor(){
        super(User)
    }
    async findBy(data){
    try {
        const response = await User.findOne(data)
        return response
    } catch (error) {
        throw error
    }
    }
}

module.exports = userRepo