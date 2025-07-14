const crudRepo = require('./crud-repo.js')
const Comment = require('../models/comment.js')

class commentRepo extends crudRepo{
    constructor(){
        super(Comment)
    }
}

module.exports = commentRepo