const userRepo = require('./user-repo.js');

module.exports={
    TweetRepo : require('./tweet-repo.js'),
    HashtagRepo:require('./hashtag-repo.js'),
    LikeRepo : require('./like-repo.js'),
    UserRepo:require('./user-repo.js'),
    CommentRepo :require('./comment-repo.js')
}