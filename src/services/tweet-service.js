const {TweetRepo,HashtagRepo} = require("../repository/index.js");

class TweetService {
    constructor(){
        this.tweetrepo = new TweetRepo()
        this.hashtagrepo = new HashtagRepo()
    }
    async create(data){
    const content = data.content;
    let tags = content.match(/#[a-zA-Z0-9_]+/g) || [];
    tags = tags.map(tag => tag.substring(1));

    const tweet = await this.tweetrepo.create(data);

    let alreadyPresentTags = await this.hashtagrepo.findByName(tags);
    let titleOfPresentTags = alreadyPresentTags.map(tag => tag.title);

    let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
    newTags = newTags.map(tag => ({ title: tag, tweets: [tweet.id] }));

    if (newTags.length > 0) {
        await this.hashtagrepo.bulkCreate(newTags);
    }

    alreadyPresentTags.forEach(async (tag) => {
        tag.tweets.push(tweet.id);
        await tag.save();
    });

    return tweet;
}
}
module.exports = TweetService