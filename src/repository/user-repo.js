const User = require('../models/user.js')
const crudRepo = require('./crud-repo.js')

class userRepo extends crudRepo{
    constructor(){
        super(User)
    }
}

module.exports = userRepo